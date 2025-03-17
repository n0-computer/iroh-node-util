//! Utilities for filesystem operations.

use std::path::PathBuf;

use anyhow::{bail, Context};
use iroh::SecretKey;
use tokio::io::AsyncWriteExt;

/// Loads a [`SecretKey`] from the provided file, or stores a newly generated one
/// at the given location.
pub async fn load_secret_key(key_path: PathBuf) -> anyhow::Result<SecretKey> {
    if key_path.exists() {
        let keystr = tokio::fs::read(key_path).await?;

        let ser_key = ssh_key::private::PrivateKey::from_openssh(keystr)?;
        let ssh_key::private::KeypairData::Ed25519(kp) = ser_key.key_data() else {
            bail!("invalid key format");
        };
        let secret_key = SecretKey::from_bytes(&kp.private.to_bytes());
        Ok(secret_key)
    } else {
        let secret_key = SecretKey::generate(rand::rngs::OsRng);
        let ckey = ssh_key::private::Ed25519Keypair {
            public: secret_key.public().public().into(),
            private: secret_key.secret().into(),
        };
        let ser_key =
            ssh_key::private::PrivateKey::from(ckey).to_openssh(ssh_key::LineEnding::default())?;

        // Try to canonicalize if possible
        let key_path = key_path.canonicalize().unwrap_or(key_path);
        let key_path_parent = key_path.parent().ok_or_else(|| {
            anyhow::anyhow!("no parent directory found for '{}'", key_path.display())
        })?;
        tokio::fs::create_dir_all(&key_path_parent).await?;

        // write to tempfile
        let (file, temp_file_path) = tempfile::NamedTempFile::new_in(key_path_parent)
            .context("unable to create tempfile")?
            .into_parts();
        let mut file = tokio::fs::File::from_std(file);
        file.write_all(ser_key.as_bytes())
            .await
            .context("unable to write keyfile")?;
        file.flush().await?;
        drop(file);

        // move file
        tokio::fs::rename(temp_file_path, key_path)
            .await
            .context("failed to rename keyfile")?;

        Ok(secret_key)
    }
}

#[cfg(test)]
mod tests {
    use super::load_secret_key;
    #[tokio::test]
    async fn secret_key_roundtrip() {
        let dir = tempfile::tempdir().unwrap();
        let path = dir.path().join("key");
        let key1 = load_secret_key(path.clone()).await.unwrap();
        let key2 = load_secret_key(path).await.unwrap();
        assert_eq!(key1.to_bytes(), key2.to_bytes());
    }
}

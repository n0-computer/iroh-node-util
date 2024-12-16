//! Utilities for building iroh nodes.
#![deny(missing_docs, rustdoc::broken_intra_doc_links)]
#![cfg_attr(iroh_docsrs, feature(doc_cfg))]
#[cfg_attr(iroh_docsrs, doc(cfg(feature = "cli")))]
#[cfg(feature = "cli")]
pub mod cli;
#[cfg_attr(iroh_docsrs, doc(cfg(feature = "config")))]
#[cfg(feature = "config")]
pub mod config;
#[cfg_attr(iroh_docsrs, doc(cfg(feature = "logging")))]
#[cfg(feature = "logging")]
pub mod logging;
pub mod rpc;

pub mod fs;

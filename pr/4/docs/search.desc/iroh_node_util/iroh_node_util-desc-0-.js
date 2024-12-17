searchState.loadedDescShard("iroh_node_util", 0, "Utilities for building iroh nodes.\nCli commands.\nUtilities to get default paths for configuration, data, …\nUtilities for filesystem operations.\nUtilities for logging\nRPC client, server and protocol to control iroh endpoints …\nDefine the net subcommands.\nNode commands\nAdd this node addr to the known nodes.\nGet the relay server we are connected to.\nCommands to manage the iroh network.\nGet the node addr of this node.\nGet information about a particular remote node.\nGet information about the different remote nodes.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRuns the net command given the iroh client.\nCommands to manage the iroh RPC.\nShutdown the running node.\nGet statistics and metrics from the running node.\nGet status of the running node.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRun the RPC command given the iroh client and the console …\nShutdown mode.\nReturns the path to the user’s cache directory for the …\nReturns the path to the user’s config directory for the …\nReturns the path to the user’s data directory for the …\nLoads a <code>SecretKey</code> from the provided file, or stores a …\nWrapper to obtain a <code>tracing_subscriber::EnvFilter</code> that …\nConfiguration for the logfiles.\nHow often should a new file be created for file logs.\nWhere to store log files.\nParse <code>&lt;bin&gt;_FILE_RUST_LOG</code> as <code>tracing_subscriber::EnvFilter</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInitialize logging both in the terminal and file based.\nInitialize logging in the terminal.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMaximum number of files to keep.\nHow often should a new log file be produced.\nRUST_LOG directive to filter file logs.\nClient to interact with iroh nodes and endpoints.\nRPC protocol definitions for controlling iroh endpoints …\nServer implementation to handle node and net rpc requests\nAPI to manage the iroh networking stack.\nClient to interact with an iroh node.\nIroh net Client.\nThe response to a version request\nAdds a known node address to this node.\nThe node id and socket addresses of this node.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the relay server we are connected to.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe bound listening addresses of the node\nCreates a new net client\nFetches the <code>NodeAddr</code> for this node.\nFetches the node id of this node.\nFetches node information about a remote iroh node …\nFetches information about currently known remote nodes.\nRPC address, if currently listening.\nThe version of the node\nClient to interact with an iroh node.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new node client\nShuts down the node.\nFetches statistics of the running node.\nFetches status information about this node.\nRequest, either net or node\nResponse, either net or node\nThe RPC service\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRPC calls to control an iroh endpoint.\nRPC calls to control a generic node.\nA request to get information the identity of the node.\nA request to watch for the node status\nGet information about a specific remote node.\nA response to a <code>Request::RemoteInfo</code> request\nList network path information about all the remote nodes …\nA response to a <code>Request::RemoteInfosIter</code>.\nThe response to a watch request\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInformation about a node.\nInformation about a node\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe node identifier\nThe version of the node\nCounter stats\nA request to shutdown the node\nGet stats for the running Iroh node\nResponse to <code>StatsRequest</code>\nA request to get information about the status of the node.\nThe counter description\nForce shutdown\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMap of statistics\nThe counter value\nTrait that provides fields used by the rpc handler for the …\nGet the endpoint of the node\nHandle rpc requests for the node and net services\nRpc address of the node, used by the node status rpc call\nShutdown the node, used by the node shutdown rpc call\nStats for the node stats rpc call")
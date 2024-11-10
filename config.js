const config = {
    useProxy: true, // Set to true if you want to use proxies, false otherwise
    restartDelay: 30, // Delay in seconds before restarting the process
        minDelay: 3, // random delay for keepalive packet send
    maxDelay: 10, // random delay for keepalive packet send
};

module.exports = config;

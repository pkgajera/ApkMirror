module.exports = {
    apps: [
        {
            name: 'Apk-Mirror',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            },
            watch: false,
            restart_delay: 5000
        }
    ]
};

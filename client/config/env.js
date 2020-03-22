const DEFAULT_API_PORT = 7771;

const getHostName = () => {
    if (process.env.NODE_ENV === 'production') return;
    const networkInterfaces = require('os').networkInterfaces();
    const ethernet = Object.keys(networkInterfaces)
        .filter((name) => name.startsWith('en'))
        .filter(
            (name) => networkInterfaces[name].filter((network) => network.family === 'IPv4').length > 0
        )[0];

    return ethernet
        ? networkInterfaces[ethernet].find((elem) => elem.family === 'IPv4').address
        : 'localhost';
};

const getLocalApiHost = () => `${getHostName()}:${DEFAULT_API_PORT}/api`;

const env = {
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false,
    API_URL: getLocalApiHost(),
    // gtm
    GTM_ID: '',
    // GA
    GA_ID: '',
    // facebook
    FACEBOOK_APP_ID: '',
    // sentry
    SENTRY_DSN: '',
    SENTRY_RELEASE_VERSION: '',
    // ReCaptcha V3
    RECAPTCHA_SITE_KEY: '' // Googleが提供している検証用のキー
};
module.exports = env;

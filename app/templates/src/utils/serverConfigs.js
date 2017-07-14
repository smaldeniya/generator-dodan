export const ENV_PROD = "PROD";
export const ENV_DEV = "DEV";
export const ENV_LOCAL = "LOCAL";
export const ENV_TEST = "TEST";

export const CONFIG_PATH = {};
export const CERTIFICATE_PATH = {};

CONFIG_PATH[ENV_PROD] = "prod";
CONFIG_PATH[ENV_DEV] = "dev";
CONFIG_PATH[ENV_LOCAL] = `${process.cwd()}/src/localConfigs/`;
CONFIG_PATH[ENV_TEST] = `${process.cwd()}/test/`; // TODO

CERTIFICATE_PATH[ENV_PROD] = ""; // TODO
CERTIFICATE_PATH[ENV_DEV] = ""; // TODO
CERTIFICATE_PATH[ENV_LOCAL] = `${process.cwd()}/src/localConfigs/ssl/`;
CERTIFICATE_PATH[ENV_TEST] = `${process.cwd()}/tests/localConfigs/ssl/`;

// File names of config files
export const CONFIGS = {
    "PLATFORM": "platform.json",
    "MYSQL": "mysql.json",
    "LOGGER": "logger.json"
};

export const LOGGER_CONFIG = "LOGGER_CONFIG";

// Keys of Platform config
export const HTTPS_PORT = "HTTPS_PORT";
export const SSL_CONFIG = "SSL_CONFIG";
export const CERTIFICATES = "CERTIFICATES";
export const SOURCE_MAPS_SUPPORT = "SOURCE_MAPS_SUPPORT";
export const EXTERNAL_API_TIMEOUT = "EXTERNAL_API_TIMEOUT";

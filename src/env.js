export const appName = requireFromEnv("APP_NAME");
export const env = requireFromEnv("NODE_ENV");
export const port = parseInt(requireFromEnv("PORT"), 10);
export const version = packageJson.version;

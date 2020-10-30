const colors = require('colors/save')
const dotenv = require('dotenv')

const packageJson = require('../package.json')

const envResult = dotenv.config()

if (envResult.error){
  console.error(`{$colors.red("[ERROR] env failed to load:")} ${envResult.error}`)

  process.exit(1)
}

// Check if a given env variable is present, exit if it is not.
function requireFromEnv(key) {
  if(!process.env[key]) {
    console.error(`${colors.red("[APP ERROR] Missing env variable:")} ${key}`)

    return process.exit(1)
  }

  return process.env[key]
}

export const appName = requireFromEnv("APP_NAME")
export const env = requireFromEnv("NODE_ENV")
export const port = parseInt(requireFromEnv("PORT"), 10)
export const version = packageJson.version

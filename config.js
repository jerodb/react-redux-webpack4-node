// ************************
// CONFIG INITIALIZATION
// ************************

require('dotenv').config()

const {
  BASE_URL, HOST, NODE_ENV, PORT, RECAPTCHA_KEY,
  AUTH_CLIENT_ID, AUTH_DOMAIN, AUTH_RESPONSE_TYPE, AUTH_REDIRECT_URI, AUTH_SCOPE,
  MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT
} = process.env

const config = {
  BASE_URL: BASE_URL || '/',
  ENV: NODE_ENV || 'development',
  HOST: HOST || '',
  IMAGES_URL: `${HOST}${BASE_URL}images/`,
  PORT: PORT || '3000',
  RECAPTCHA_KEY,

  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  AUTH_RESPONSE_TYPE,
  AUTH_REDIRECT_URI,
  AUTH_SCOPE,

  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_HOST,
  MYSQL_PORT,
}

module.exports = config

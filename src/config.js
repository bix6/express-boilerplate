module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "config-no-node-env",
  API_TOKEN: process.env.API_TOKEN || "config-no-api-token",
  DATABASE_URL: process.env.DATABASE_URL || "config-no-db-url",
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "config-no-client-origin",
};

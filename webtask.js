const tools = require('auth0-extension-express-tools');

const expressApp = require('./server');
const config = require('./server/lib/config');
const logger = require('./server/lib/logger');

const createServer = tools.createServer((cfg, storage) => {
  logger.info('Starting Delegated Admin Extension - Version:', process.env.CLIENT_VERSION);
  return expressApp(cfg, storage);
});

module.exports = (context, req, res) => {
  logger.info('Starting to Start Delegated Admin Extension');
  config.setValue('PUBLIC_WT_URL', tools.urlHelpers.getWebtaskUrl(req));
  createServer(context, req, res);
};

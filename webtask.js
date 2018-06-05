//const tools = require('auth0-extension-express-tools');

//const expressApp = require('./server');
//const config = require('./server/lib/config');
//const logger = require('./server/lib/logger');

//const createServer = tools.createServer((cfg, storage) => {
//  logger.info('Starting Delegated Admin Extension - Version:', process.env.CLIENT_VERSION);
//  return expressApp(cfg, storage);
//});

//module.exports = (context, req, res) => {
//  logger.info('Starting to Start Delegated Admin Extension');
//  config.setValue('PUBLIC_WT_URL', tools.urlHelpers.getWebtaskUrl(req));
//  createServer(context, req, res);
//};

var Webtask = require('webtask-tools');

// This is the entry-point for the Webpack build. We need to convert our module
// (which is a simple Express server) into a Webtask-compatible function.
module.exports = Webtask.fromExpress(require('./index.js'));

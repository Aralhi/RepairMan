switch (process.env.NODE_ENV) {
  case 'dev':
    module.exports = require('./scripts/webpack.config.dev');
    break;
  case 'prod':
    module.exports = require('./scripts/webpack.config.prod');
    break;
}

switch (process.env.NODE_ENV) {
  case 'dev':
  console.info('1111111');
    module.exports = require('./scripts/webpack.config.dev');
    break;
  case 'prod':
  console.info('2222222');
    module.exports = require('./scripts/webpack.config.prod');
    break;
}

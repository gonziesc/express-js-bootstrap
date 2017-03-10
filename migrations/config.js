const config = require('../config/config').config;

module.exports = {
  [config.environment]: Object.assign({}, config.common.database, { dialect: 'postgres' })
};

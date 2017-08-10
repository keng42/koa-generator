const development = require('./dev');
const production = require('./prod');

const kENV = process.env.NODE_ENV || 'development';
const env2conf = {
  production,
  development,
};

module.exports = env2conf[kENV];

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (environmentVariable) => {
  const { env } = environmentVariable;

  const environmentConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, environmentConfig);

  return config;
};

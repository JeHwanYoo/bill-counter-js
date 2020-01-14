const configDev = require('./webpack.dev');
const configProd = require('./webpack.prod');

const config = [];

configDev.forEach(v => {
  config.push(v);
});

configProd.forEach(v => {
  config.push(v);
});

module.exports = config;

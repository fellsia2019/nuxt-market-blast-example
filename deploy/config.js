exports.script = './node_modules/nuxt/bin/nuxt.js';

exports.branchConfig = () => {
  require('dotenv').config();

  return {
    dev: {
      apiDomain: 'localhost',
      dnsApiDomain: 'localhost',
      name: `${process.env.APP_NAME}_dev`,
      port: '3000',
      exec_mode: 'cluster',
      instances: 1,
      isProd: false,
    },
    master: {
      apiDomain: 'localhost',
      dnsApiDomain: 'localhost',
      name: `${process.env.APP_NAME}_demo`,
      port: '3001',
      exec_mode: 'cluster',
      instances: 1,
      isProd: false,
    },
    prod: {
      apiDomain: 'localhost',
      dnsApiDomain: 'localhost',
      name: `${process.env.APP_NAME}_prod`,
      port: '3002',
      exec_mode: 'cluster',
      instances: 1,
      isProd: true,
    },
  };
};

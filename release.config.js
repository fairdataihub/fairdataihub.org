const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig(
  'default',
  'fairdataihub',
  'fairdataihub.org',
  false,
);

module.exports = config;

const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig(
  'default',
  'fairdataihub',
  'fairdataihub-website',
  false,
);

module.exports = config;

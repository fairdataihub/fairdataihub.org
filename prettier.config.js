const { devmojiConfig } = require('@fairdataihub/config');

const config = devmojiConfig();

config.singleQuote = true;
config.trailingComma = 'all';

module.exports = config;

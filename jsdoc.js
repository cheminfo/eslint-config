'use strict';

module.exports = {
  plugins: ['jsdoc'],
  extends: ['plugin:jsdoc/recommended'],
  rules: {
    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
  },
};

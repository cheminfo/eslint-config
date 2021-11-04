'use strict';

module.exports = {
  plugins: ['jsdoc'],
  extends: ['plugin:jsdoc/recommended'],
  settings: {
    jsdoc: {
      ignoreInternal: true,
      maxLines: 3,
    },
  },
  rules: {
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
      },
    ],
    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
  },
};

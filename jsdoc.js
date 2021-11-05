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
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/779
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-hyphen-before-param-description': 'warn',
  },
};

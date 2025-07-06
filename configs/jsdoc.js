import { defineConfig } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig(
  jsdoc.configs['flat/recommended'],
  {
    name: 'cheminfo/jsdoc/rules',
    settings: {
      jsdoc: {
        ignoreInternal: true,
        maxLines: 3,
      },
    },
    rules: {
      'jsdoc/no-defaults': 'off',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          enableFixer: false,
          publicOnly: true,
        },
      ],
      'jsdoc/require-asterisk-prefix': 'warn',
      'jsdoc/require-description': 'warn',
      'jsdoc/require-hyphen-before-param-description': 'warn',
    },
  },
  {
    name: 'cheminfo/jsdoc/typescript',
    files: ['**/*.{ts,tsx,cts,mts}'],
    rules: {
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/no-types': 'warn',
    },
  },
);

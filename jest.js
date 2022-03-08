'use strict';

module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
        '*.test.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
      ],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        // Allow empty functions in tests.
        'no-empty-function': 'off',

        // Jest plugin (https://github.com/jest-community/eslint-plugin-jest)
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': 'off',
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': 'off',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'off',
        'jest/require-to-throw-message': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};

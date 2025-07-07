import vitest from '@vitest/eslint-plugin';

/** @type {import('eslint/config').Config} */
const vitestConfig = {
  name: 'cheminfo/vitest/rules',
  files: ['**/*.test.{js,mjs,cjs,jsx}'],
  plugins: {
    vitest,
  },
  rules: {
    // https://github.com/vitest-dev/eslint-plugin-vitest#rules
    ...vitest.configs.recommended.rules,
    'vitest/consistent-test-it': 'error',
    'vitest/no-alias-methods': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-conditional-tests': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-focused-tests': [
      'error',
      {
        // Don't let it be auto-fixed so we can have focused tests during development.
        fixable: false,
      },
    ],
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/padding-around-all': 'error',
    'vitest/prefer-called-once': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-equality-matcher': 'error',
    'vitest/prefer-expect-resolves': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-importing-vitest-globals': 'error',
    'vitest/prefer-strict-boolean-matchers': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/require-hook': 'error',
    'vitest/require-to-throw-message': 'error',
    'vitest/valid-expect-in-promise': 'error',
  },
};

export default vitestConfig;

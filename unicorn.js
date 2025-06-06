import { defineConfig } from 'eslint/config';
import unicorn from 'eslint-plugin-unicorn';

export default defineConfig([
  unicorn.configs['flat/recommended'],
  {
    name: 'cheminfo/unicorn/rules',
    rules: {
      // We are not consistent enough to enable this rule.
      'unicorn/filename-case': 'off',
      // Some prefer to always use destructuring.
      'unicorn/import-style': 'off',
      // Flags i,j,k, etc.
      'unicorn/prevent-abbreviations': 'off',
      // TODO: create issue about risk (>32bit integers)
      'unicorn/prefer-math-trunc': 'off',
      // We prefer Array.from(x) over [...x].
      'unicorn/prefer-spread': 'off',
      // We prefer new Array(x).fill() over Array.from({ length: x }).
      'unicorn/no-new-array': 'off',
      // We don't like separators after the comma.
      'unicorn/numeric-separators-style': 'off',
      // For loop is used sometimes for performance.
      'unicorn/no-for-loop': 'off',
      // We use null in many places.
      'unicorn/no-null': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-type-error': 'off',
      // Might want to enable in a future semver-major.
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-useless-undefined': 'off',
      // Conflicts with Prettier.
      'unicorn/number-literal-case': 'off',
      // Too early for full ESM.
      'unicorn/prefer-module': 'off',
      // Conflicts with Prettier.
      'unicorn/no-nested-ternary': 'off',
      // Problematic with useOnOff.
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/prefer-regexp-test': 'off',
      // Unfortunately, too annoying on valid cases, plus it conflicts with TS.
      'unicorn/no-array-callback-reference': 'off',
      // May conflict with other rule + ugly switch(0) auto-fix.
      'unicorn/prefer-switch': 'off',
      // Rare and problematic with APIs that have a find method.
      'unicorn/no-array-method-this-argument': 'off',
      // We don't use the feature.
      'unicorn/expiring-todo-comments': 'off',
      // Doesn't work with typescript-eslint v6 at the moment.
      'unicorn/no-empty-file': 'off',
      // We already have a rule for anonymous functions and tooling often does this with config.
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
]);

import { defineConfig } from 'eslint/config';
import unicorn from 'eslint-plugin-unicorn';

import { nameReplacementsAllowList } from './utilities.js';

export default defineConfig([
  unicorn.configs['flat/recommended'],
  {
    name: 'cheminfo/unicorn/rules',
    rules: {
      'unicorn/consistent-destructuring': 'error',
      // We don't use the feature.
      'unicorn/expiring-todo-comments': 'off',
      // We are not consistent enough to enable this rule.
      'unicorn/filename-case': 'off',
      // Some prefer to always use destructuring.
      'unicorn/import-style': 'off',
      'unicorn/name-replacements': [
        'error',
        {
          allowList: nameReplacementsAllowList,
        },
      ],
      // We already have a rule for anonymous functions and tooling often does this with config.
      'unicorn/no-anonymous-default-export': 'off',
      // Unfortunately, too annoying on valid cases, plus it conflicts with TS.
      'unicorn/no-array-callback-reference': 'off',
      // Rare and problematic with APIs that have a find method.
      'unicorn/no-array-method-this-argument': 'off',
      // Data processing algorithms are often based on nested loops and would be difficult to refactor for little benefit.
      'unicorn/no-break-in-nested-loop': 'off',
      // This is risky because it suggests to use Object.hasOwn, which will not behave the same when the existence check should ignore
      // existing properties with the value `undefined`.
      'unicorn/no-computed-property-existence-check': 'off',
      // Doesn't work with typescript-eslint v6 at the moment.
      'unicorn/no-empty-file': 'off',
      // For loop is used sometimes for performance.
      'unicorn/no-for-loop': 'off',
      // Might want to enable in a future semver-major.
      'unicorn/no-negated-condition': 'off',
      // Conflicts with Prettier.
      'unicorn/no-nested-ternary': 'off',
      // We prefer new Array(x).fill() over Array.from({ length: x }).
      'unicorn/no-new-array': 'off',
      // We use null in many places.
      'unicorn/no-null': 'off',
      // Problematic with useOnOff.
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/no-useless-undefined': 'off',
      // Conflicts with Prettier.
      'unicorn/number-literal-case': 'off',
      // We don't like separators after the comma.
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-import-meta-properties': 'error',
      // TODO: create issue about risk (>32bit integers)
      'unicorn/prefer-math-trunc': 'off',
      // Too early for full ESM.
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-regexp-test': 'off',
      // This is usually not a source of perf issues and maybe not the best heuristic.
      'unicorn/prefer-simple-condition-first': 'off',
      // We prefer Array.from(x) over [...x].
      'unicorn/prefer-spread': 'off',
      // May conflict with other rule + ugly switch(0) auto-fix.
      'unicorn/prefer-switch': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-type-error': 'off',
      'unicorn/switch-case-braces': 'off',
    },
  },
]);

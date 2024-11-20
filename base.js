import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    plugins: {
      import: importPlugin,
    },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    languageOptions: {
      globals: {
        ...globals['shared-node-browser'],
      },
    },

    rules: {
      // https://eslint.org/docs/latest/rules/
      // Last rules review: v8.56.0

      // https://github.com/import-js/eslint-plugin-import#rules
      // Last rules review: v2.31.0

      //#region Possible Problems (https://eslint.org/docs/latest/rules/#possible-problems)
      'array-callback-return': 'error',
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'off',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'off',
      'no-useless-backreference': 'error',
      'require-atomic-updates': ['error', { allowProperties: true }],
      'use-isnan': 'error',
      'valid-typeof': 'error',
      //#endregion

      //#region Suggestions (https://eslint.org/docs/latest/rules/#suggestions)
      'accessor-pairs': 'off',
      'arrow-body-style': 'off',
      'block-scoped-var': 'error',
      camelcase: ['error', { properties: 'always', ignoreDestructuring: true }],
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      complexity: 'off',
      'consistent-return': 'off',
      'consistent-this': 'off',
      curly: ['error', 'multi-line', 'consistent'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'allow-null'],
      'func-name-matching': 'off',
      'func-names': 'error',
      'func-style': 'off',
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'off',
      'id-denylist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'init-declarations': 'off',
      'logical-assignment-operators': 'off',
      'max-classes-per-file': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'off',
      'max-params': 'off',
      'max-statements': 'off',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-continue': 'off',
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'off',
      'no-empty': 'error',
      'no-empty-function': 'warn',
      'no-empty-static-block': 'error',
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'off',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'off',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': 'off',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'off',
      'no-nested-ternary': 'off',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-syntax': 'off',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-shadow-restricted-names': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      // Conflicts with typescript-eslint's no-floating-promises rule.
      'no-void': 'off',
      'no-warning-comments': 'warn',
      'no-with': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'operator-assignment': 'off',
      'prefer-arrow-callback': 'off',
      'prefer-const': 'off',
      'prefer-destructuring': 'off',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'warn',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-await': 'off',
      'require-unicode-regexp': 'off',
      'require-yield': 'error',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      strict: ['error', 'global'],
      'symbol-description': 'error',
      'vars-on-top': 'off',
      yoda: 'error',
      //#endregion

      //#region Layout & Formatting (https://eslint.org/docs/latest/rules/#layout--formatting)
      'unicode-bom': 'error',
      //#endregion

      //#region Import plugin (https://github.com/import-js/eslint-plugin-import#rules)
      // Helpful warnings
      'import/export': 'error',
      // Handled by the TypeScript plugin.
      // 'import/no-deprecated': 'off',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
      // The `prefer-const` rule already handles wrong use of `let`.
      // 'import/no-mutable-exports': 'off',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      // This should be enabled and configured in projects on a case-by-case basis.
      // 'import/no-unused-modules': 'off',

      // Module systems
      // No risk to introduce it by mistake.
      // 'import/no-amd': 'off',
      // Not ready for this.
      // 'import/no-commonjs': 'off',
      // We don't do this mistake.
      // 'import/no-import-module-exports': 'off',
      // Why wouldn't we?
      // 'import/no-nodejs-modules': 'off',
      // Very rare and has not been an issue for us.
      // 'import/unambiguous': 'off',

      // Static analysis
      // These are bugs that can be caught by tests and TypeScript.
      // 'import/default': 'off',
      // 'import/named': 'off',
      // 'import/namespace': 'off',
      'import/no-absolute-path': 'error',
      // TODO: maybe enable at some point
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
      // 'import/no-cycle': 'off',
      'import/no-dynamic-require': 'error',
      // This should be enabled and configured in projects on a case-by-case basis.
      // 'import/no-internal-modules': 'off',
      // 'import/no-relative-packages': 'off',
      // 'import/no-relative-parent-imports': 'off',
      // 'import/no-restricted-paths': 'off',
      'import/no-self-import': 'error',
      // Resolver doesn't support all recent node features.
      // 'import/no-unresolved': 'off',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',

      // Style guide
      // Will be enabled in the TypeScript config.
      // 'import/consistent-type-specifier-style': 'off',
      // We don't use webpack.
      // 'import/dynamic-import-chunkname': 'off',
      // We never do that.
      // 'import/exports-last': 'off',
      // We handle this in TypeScript and resolver doesn't support all recent node features.
      // 'import/extensions': 'off',
      'import/first': 'error',
      // We never do that.
      // 'import/group-exports': 'off',
      // Difficult to avoid it in React components.
      // 'import/max-dependencies': 'off',
      'import/newline-after-import': 'error',
      // There are cases where it makes sense.
      // 'import/no-anonymous-default-export': 'off',
      // This is essentially incompatible with React.
      // 'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      // Of course not.
      // 'import/no-named-export': 'off',
      // Sometimes we need it in TypeScript.
      // 'import/no-namespace': 'off',
      'import/no-unassigned-import': [
        'error',
        {
          allow: ['dotenv/config', 'reflect-metadata', '**/*.css'],
        },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      // We usually mix default and named exports, especially in React projects.
      // 'import/prefer-default-export': 'off',
      //#endregion
    },
  },
  {
    // .cjs files are always for Node.js.
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
    },
  },
  {
    // Configuration files are usually for Node.js modules.
    files: ['**/*.config.{js,cjs,mjs,ts,cts,mts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

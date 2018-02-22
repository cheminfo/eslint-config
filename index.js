'use strict';

module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: '2017',
    sourceType: 'script'
  },
  extends: 'eslint:recommended',
  plugins: ['import', 'jest'],
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '*.test.js'],
      env: {
        jest: true
      },
      rules: {
        // Jest plugin (https://github.com/jest-community/eslint-plugin-jest)
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-large-snapshots': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error'
      }
    }
  ],
  rules: {
    // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
    'for-direction': 'error',
    'getter-return': 'error',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error', // Use https://github.com/pebble/has-own
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': [
      'warn',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          returns: 'return'
        },
        preferType: {
          array: 'Array',
          Boolean: 'boolean',
          Function: 'function',
          Number: 'number',
          Object: 'object',
          String: 'string'
        },
        requireReturn: false,
        requireReturnType: true,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],
    'valid-typeof': 'error',

    // Best Practices (http://eslint.org/docs/rules/#best-practices)
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'off', // todo: enable?
    'class-methods-use-this': 'off',
    complexity: 'off', // todo: enable?
    'consistent-return': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'allow-null'],
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off', // todo enable?
    'no-empty-function': 'warn',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'warn',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off', // only useful for browser scripts
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'off', // to enable on a case-by-case basis
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off', // todo: maybe warn later
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: 'warn',
    'require-await': 'error',
    'vars-on-top': 'off', // todo: maybe warn later
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',

    // Strict Mode (https://eslint.org/docs/rules/#strict-mode)
    strict: ['error', 'global'],

    // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
    'arrow-body-style': 'off',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'off', // conflicts with prettier
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'off', // too soon for enabling this globally
    'object-shorthand': 'off', // complex
    'prefer-arrow-callback': 'off', // complex
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after'],

    // todo continue the list

    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    camelcase: 'error',
    'comma-dangle': 'off',
    'comma-spacing': ['error', { after: true, before: false }],
    'comma-style': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 1 }],
    'no-new-object': 'error',
    'no-shadow-restricted-names': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: 'error',
    'semi-spacing': ['error', { after: true, before: false }],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-unary-ops': 'error',

    // Import plugin (https://github.com/benmosher/eslint-plugin-import)

    // Static analysis
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'import/default': 'warn',
    'import/namespace': 'error',
    'import/no-restricted-path': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'warn',

    // Module systems
    'import/unambiguous': 'warn',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // Style guide
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'warn',
    'import/no-named-default': 'warn',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'warn',
    'import/group-exports': 'off'
  }
};

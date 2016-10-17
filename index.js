'use strict';

module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: '2015',
        sourceType: 'script'
    },
    extends: 'eslint:recommended',
    plugins: [
        'no-only-tests'
    ],
    rules: {
        // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': ['error', {checkLoops: false}],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
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
        'valid-jsdoc': ['warn', {
            prefer: {
                arg: 'param',
                argument: 'param',
                returns: 'return',
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
        }],
        'valid-typeof': 'error',

        // Best Practices (http://eslint.org/docs/rules/#best-practices)
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'off', // todo: enable?
        'class-methods-use-this': 'off',
        'complexity': 'off', // todo: enable?
        'consistent-return': 'error',
        'curly': ['error', 'multi-line', 'consistent'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': ['error', 'allow-null'],
        // todo continue the list

        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'camelcase': 'error',
        'comma-dangle': 'off',
        'comma-spacing': ['error', {after: true, before: false}],
        'comma-style': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'indent': ['error', 4, {SwitchCase: 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-delete-var': 'error',
        'no-extra-label': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1, maxBOF: 1}],
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-shadow-restricted-names': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unused-expressions': 'error',
        'no-with': 'error',
        'object-curly-spacing': ['error', 'never'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'semi': 'error',
        'semi-spacing': ['error', {after: true, before: false}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error', {int32Hint: true}],
        'space-unary-ops': 'error',
        'strict': ['error', 'global'],

        'no-only-tests/no-only-tests': 'error'
    }
};

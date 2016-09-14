'use strict';

module.exports = {
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    plugins: [
        'no-only-tests'
    ],
    rules: {
        'brace-style': ['error', '1tbs'],
        'camelcase': 'error',
        'comma-spacing': ['error', {after: true, before: false}],
        'comma-style': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'allow-null'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'new-parens': 'error',
        'no-cond-assign': 'error',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1, maxBOF: 1}],
        'no-trailing-spaces': 'error',
        'quotes': ['error', 'single', 'avoid-escape'],
        'semi': 'error',
        'semi-spacing': ['error', {after: true, before: false}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'strict': ['error', 'global'],
        'no-only-tests/no-only-tests': 'error'
    }
};

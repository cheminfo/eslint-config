'use strict';

const assert = require('assert');
const fs = require('fs');
const util = require('util');

const linter = require('eslint').linter;

const config = require('../index');
for (const rule of Object.keys(config.rules)) {
    if (rule.startsWith('jest/')) {
        delete config.rules[rule];
    }
}

const ok = fs.readFileSync(__dirname + '/ok.js', 'utf8');
const notOk = fs.readFileSync(__dirname + '/not-ok.js', 'utf8');

const okResult = linter.verify(ok, config);
assert.strictEqual(okResult.length, 0, 'ok.js should have no error: ' + util.format(okResult));

const notOkResult = linter.verify(notOk, config);
const errors = notOkResult.map(error => error.ruleId).sort();
assert.deepStrictEqual(errors, [
    'no-console',
    'no-multiple-empty-lines',
    'no-new',
    'no-redeclare',
    'no-unused-vars',
    'one-var',
    'one-var-declaration-per-line',
    'quote-props',
    'quotes',
    'strict',
    'wrap-iife'
]);

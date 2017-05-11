'use strict';

const assert = require('assert');
const fs = require('fs');
const util = require('util');

const linter = require('eslint').linter;

const config = require('../index');
delete config.plugins;
delete config.rules['no-only-tests/no-only-tests'];

const ok = fs.readFileSync(__dirname + '/ok.js', 'utf8');
const notOk = fs.readFileSync(__dirname + '/not-ok.js', 'utf8');

const okResult = linter.verify(ok, config);
assert.strictEqual(okResult.length, 0, 'ok.js should have no error: ' + util.format(okResult));

const notOkResult = linter.verify(notOk, config);
assert.deepStrictEqual(notOkResult.map(error => error.ruleId), [
    'strict',
    'no-console',
    'no-unused-vars',
    'quotes',
    'no-redeclare',
    'quote-props',
    'one-var',
    'one-var-declaration-per-line',
    'no-multiple-empty-lines'
]);

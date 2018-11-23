'use strict';

const assert = require('assert');
const fs = require('fs');
const util = require('util');
const { CLIEngine } = require('eslint');

const engine = new CLIEngine({ configFile: 'index.js' });

const [okResult, notOkResult] = engine.executeOnFiles([
  'test/ok.js',
  'test/not-ok.js'
]).results;

assert.strictEqual(
  okResult.errorCount,
  0,
  'ok.js should have no error: ' + util.format(okResult)
);

const errors = notOkResult.messages
  .filter(isError)
  .map((error) => error.ruleId)
  .sort();
assert.deepStrictEqual(errors, [
  'indent',
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

function isError(message) {
  return message.severity === 2;
}

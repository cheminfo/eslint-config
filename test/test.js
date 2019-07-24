'use strict';

const assert = require('assert');
const util = require('util');
const { CLIEngine } = require('eslint');

const engine = new CLIEngine({ configFile: 'index.js' });

const [okResult, notOkResult, jestResult] = engine.executeOnFiles([
  'test/ok.js',
  'test/not-ok.js',
  'test/jest.test.js',
]).results;

assert.strictEqual(
  okResult.errorCount,
  0,
  'ok.js should have no error: ' + util.format(okResult),
);

const errors = notOkResult.messages
  .filter(isError)
  .map((error) => error.ruleId)
  .sort();
assert.deepStrictEqual(errors, [
  'no-console',
  'no-redeclare',
  'no-unused-vars',
  'no-unused-vars',
  'no-var',
  'no-var',
  'one-var',
  'one-var-declaration-per-line',
  'prettier/prettier',
  'prettier/prettier',
  'prettier/prettier',
  'prettier/prettier',
  'prettier/prettier',
  'prettier/prettier',
  'prettier/prettier',
  'strict',
  'wrap-iife',
]);

assert.strictEqual(jestResult.errorCount, 1);

function isError(message) {
  return message.severity === 2;
}

'use strict';

const assert = require('assert');
const util = require('util');
const { ESLint } = require('eslint');

const eslint = new ESLint({ overrideConfigFile: 'eslintrc.test.yml' });

eslint
  .lintFiles(['test/ok.js', 'test/not-ok.js', 'test/jest.test.js'])
  .then((results) => {
    const [okResult, notOkResult, jestResult] = results;

    assert.strictEqual(
      okResult.errorCount,
      0,
      'ok.js should have no error: ' + util.format(okResult.messages),
    );

    assert.strictEqual(
      okResult.warningCount,
      0,
      'ok.js should have no warnings: ' + util.format(okResult.messages),
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
      'strict',
      'wrap-iife',
    ]);

    assert.strictEqual(jestResult.errorCount, 1, util.inspect(jestResult));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function isError(message) {
  return message.severity === 2;
}

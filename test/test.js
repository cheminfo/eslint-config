import assert from 'node:assert';

import { loadESLint } from 'eslint';

/** @type {import('eslint').ESLint} */
const ESLint = await loadESLint({ useFlatConfig: true });
const eslint = new ESLint();

const [okResult, notOkResult] = await eslint.lintFiles([
  'test/ok.js',
  'test/not-ok.js',
]);

assert.strictEqual(okResult.errorCount, 0, 'ok.js should have no error');

const errors = notOkResult.messages
  .filter(isError)
  .map((error) => error.ruleId)
  .sort();

assert.deepStrictEqual(errors, [
  'import/no-absolute-path',
  'no-console',
  'no-lookahead-lookbehind-regexp/no-lookahead-lookbehind-regexp',
  'no-redeclare',
  'no-unused-vars',
  'no-unused-vars',
  'no-var',
  'no-var',
  'one-var',
  'strict',
  'unicorn/no-array-reduce',
]);

function isError(message) {
  return message.severity === 2;
}

import assert from 'node:assert';

import { loadESLint } from 'eslint';

const ESLint = await loadESLint({ useFlatConfig: true });
/** @type {import('eslint').ESLint} */
const eslint = new ESLint();

const [okResult, notOkResult] = await eslint.lintFiles([
  'test/ok.js',
  'test/not-ok.js',
]);

const okErrors = okResult.messages.filter(isError).filter(ignoreUnusedVars);

assert.strictEqual(okErrors.length, 0, 'ok.js should have no error');

const errors = notOkResult.messages
  .filter(isError)
  .filter(ignoreUnusedVars)
  .map((error) => error.ruleId)
  .sort();

assert.deepStrictEqual(errors, [
  'import/no-absolute-path',
  'import/no-unassigned-import',
  'import/order',
  'no-console',
  'no-redeclare',
  'no-var',
  'no-var',
  'one-var',
  'strict',
  'unicorn/no-array-reduce',
  'unicorn/prefer-node-protocol',
]);

function isError(message) {
  return message.severity === 2;
}

function ignoreUnusedVars(message) {
  return message.ruleId !== 'no-unused-vars';
}

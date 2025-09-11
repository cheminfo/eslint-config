import assert from 'node:assert';
import { test } from 'node:test';

import { loadESLint } from 'eslint';

globalThis.process.env.LINT_NOT_OK = 'true';

const ESLint = await loadESLint({ useFlatConfig: true });
/** @type {import('eslint').ESLint} */
const eslint = new ESLint();

test('ok file', async () => {
  const [okResult] = await eslint.lintFiles(['test/__tests__/ok.test.js']);
  const okErrors = okResult.messages
    .values()
    .filter(isError)
    .filter(ignoreUnusedVars)
    .toArray();
  assert.strictEqual(
    okErrors.length,
    0,
    `ok.js should have no error: ${okErrors.map((error) => error.ruleId)}`,
  );
});

test('not ok file', async () => {
  const [notOkResult] = await eslint.lintFiles(['test/not-ok.js']);
  const errors = notOkResult.messages
    .values()
    .filter(isError)
    .filter(ignoreUnusedVars)
    .map((error) => error.ruleId)
    .toArray()
    .toSorted();

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
});

test('ok test file', async () => {
  const [okResult] = await eslint.lintFiles(['test/ok.js']);
  const okErrors = okResult.messages
    .values()
    .filter(isError)
    .filter(ignoreUnusedVars)
    .toArray();
  assert.strictEqual(okErrors.length, 0, 'ok.js should have no error');
});

test('not ok test file', async () => {
  const [notOkResult] = await eslint.lintFiles(['test/not_ok.test.js']);
  const errors = notOkResult.messages
    .values()
    .filter(isError)
    .filter(ignoreUnusedVars)
    .map((error) => error.ruleId)
    .toArray()
    .toSorted();

  assert.deepStrictEqual(errors, [
    'vitest/consistent-test-it',
    'vitest/consistent-test-it',
    'vitest/expect-expect',
    'vitest/no-alias-methods',
  ]);
});

function isError(message) {
  return message.severity === 2;
}

function ignoreUnusedVars(message) {
  return message.ruleId !== 'no-unused-vars';
}

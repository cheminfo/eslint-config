import assert from 'node:assert';
import fs from 'node:fs';

import { Linter } from 'eslint';

import config from '../cheminfo.js';

function readTestFile(filename) {
  return fs.readFileSync(new URL(`./${filename}`, import.meta.url), 'utf8');
}

const linter = new Linter({ configType: 'flat' });

const okResult = linter.verify(readTestFile('ok.js'), config);
assert.strictEqual(okResult.length, 0, 'ok.js should have no error');

const notOkResult = linter.verify(readTestFile('not-ok.js'), config);

const errors = notOkResult
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

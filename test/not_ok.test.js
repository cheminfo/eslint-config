import { describe, expect, it, test } from 'vitest';

describe('desc', () => {
  // Require hook.
  const value = 21 * 2;

  test('should be "it" within describe', () => {
    expect(value).toBe(42);
  });
});

it('should be "test" outside of describe', () => {
  expect(1 + 1).toBe(2);
  // No alias: should be `toHaveBeenCalled()`
  expect(() => {}).toBeCalled();
});

test('missing expect', () => {});

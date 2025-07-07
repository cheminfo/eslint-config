import { describe, expect, it, test } from 'vitest';

describe('desc', () => {
  it('should be ok', () => {
    expect(21 * 2).toBe(42);
  });
});

test('alone', async () => {
  const result = await new Promise((resolve) => {
    resolve(42);
  });

  expect(result).toBe(42);
});

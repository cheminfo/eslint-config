let a, b, c;
let x = 1;
let y = 2;
let z;

a = 1;
b = 2;
c = a + b;

/**
 * This is function a.
 * @returns {void}
 */
export function aFunction() {
  return 1;
}

// Allow regexes without unicode flag
const reg = /abc/;

/**
 * Checks a.
 * @param {string} a - Some string.
 * @returns {string} - The value of a.
 */
export function check(a) {
  return a;
}

/**
 * @internal
 */
export function internal(x) {
  return x;
}

// This function is not exported and should trigger a jsdoc error.
function internalNotExported(x) {
  return x;
}

/**
 * Returns the sum of a 2D array.
 * @param array - {number[][]} - input
 * @returns {number} - the sum
 */
export function sum2D(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total += array[i][j];
    }
  }
  return total;
}

const usedInternalNotExported = internalNotExported;

let bigint = new BigInt64Array(1);

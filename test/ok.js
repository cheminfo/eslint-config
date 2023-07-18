let a, b, c;
let x = 1;
let y = 2;
let z;
useIt(x, y, z);

a = 1;
b = 2;
c = a + b;
useIt(c);

/**
 * This is function a.
 * @returns {void}
 */
export function A() {
  this.x = 1;
}

// Allow regexes without unicode flag
useIt(/abc/);

(function f() {
  return 1;
})();

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

internalNotExported('test');

let bigint = new BigInt64Array(1);
useIt(bigint);

/**
 * Use this function to mark a variable as used.
 * @param  {...any} vals - The values to use.
 * @returns {any} The used values.
 */
function useIt(...vals) {
  return vals;
}

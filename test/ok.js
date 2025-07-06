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
export function A() {
  this.x = 1;
}

// Allow regexes without unicode flag
const reg = /abc/;

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

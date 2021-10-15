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
 *
 * @returns {void}
 */
function A() {
  this.x = 1;
}

useIt(new A());

// Allow regexes without unicode flag
useIt(/abc/);

(function f() {
  return 1;
})();

/**
 * Checks a.
 *
 * @param {string} a - Some string.
 * @returns {string} - The value of a.
 */
function check(a) {
  return a;
}
check('test');

let bigint = new BigInt64Array(1);
useIt(bigint);

/**
 * Use this function to mark a variable as used.
 *
 * @param  {...any} vals - The values to use.
 * @returns {any} The used values.
 */
function useIt(...vals) {
  return vals;
}

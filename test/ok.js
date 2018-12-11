'use strict';

var a, b, c;
var x = 1;
var y = 2;
var z;
useIt(x, y, z);

a = 1;
b = 2;
c = a + b;
useIt(c);

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
 * Checks a
 * @param {string} a
 * @return {string}
 */
function check(a) {
  return a;
}
check('test');

// use this function to mark a variable as used
function useIt(...vals) {
  return vals;
}

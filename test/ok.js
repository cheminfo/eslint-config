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

(function f() {
    return 1;
})();

// use this function to mark a variable as used
function useIt(...vals) {
    return vals;
}

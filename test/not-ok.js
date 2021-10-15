'use strict';

console.log('abc');

let a;

var x = "b";
var x;
useIt(x);

x = {
  'useless': 'quotes'
};

let y = 1, z;
useIt(y, z);

function A() {
  this.x = 1;
}

(function f() {
    return 1;
}());

// use this function to mark a variable as used
function useIt(...vals) {
  return vals;
}



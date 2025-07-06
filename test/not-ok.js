'use strict';

// Wrong import name order and missing node: protocol.
import { join, dirname } from 'path';

import '/absolute/path';

console.log('abc');

let a;

var x = 'b';
var x;

x = {
  useless: 'quotes',
};

let y = 1,
  z;

function A() {
  this.x = 1;
}

['a', 'b', 'c'].reduce((prev, curr) => {
  prev[curr] = true;
  return prev;
});

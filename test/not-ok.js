
console.log('abc');

var a;

var x = "b";
var x;
useIt(x);

x = {
    'useless': 'quotes'
};

var y = 1, z;
useIt(y, z);

function A() {
    this.x = 1;
}

new A();

// use this function to mark a variable as used
function useIt(...vals) {
    return vals;
}



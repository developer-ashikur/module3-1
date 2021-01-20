//aker bou onner
var a = 7;
var b = 9;
console.log("Before swap a = " + a + ", b = " + b);
var temp = a;
a = b;
b = temp;
console.log("After swap a = " + a + ", b = " + b);

var x = 7;
var y = 9;
console.log("Before swap a = " + x + ", b = " + y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap a = " + x + ", b = " + y);

var m = 7;
var n = 9;
console.log("Before swap a = " + m + ", b = " + n);
[m, n] = [n, m];
console.log("After swap a = " + m + ", b = " + n);

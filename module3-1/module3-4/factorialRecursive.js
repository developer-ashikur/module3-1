//n!=n*(n-1)!
function checkFactorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * checkFactorial(n - 1);
    }
}
var result = checkFactorial(5);
console.log(result);
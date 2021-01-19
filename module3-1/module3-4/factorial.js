//check factorial of a number (iterative method)

function checkFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
var result = checkFactorial(0);
console.log(result);

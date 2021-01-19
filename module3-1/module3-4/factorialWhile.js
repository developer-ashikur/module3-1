function checkFactorial(num) {
  let i = 1;
  let factorial = 1;
  while (i <= num) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}
var result = checkFactorial(3);
console.log(result);

//fibonacci series
//fibo[i]=fibo[i-1]+fibo[i-2]
let fibo = [0, 1];
function createFibo(n) {
  for (i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
var result = createFibo(15);
console.log(result);

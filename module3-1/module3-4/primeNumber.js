//check a number is prime or not
function isPrime(n) {
    for (let i = 2; i < n; i++){
        if (n % i == 0) {
            return 'The number is not a prime number.';
        }
        else {
            return 'The number is a prime number.'
        }
    }
}
let result = isPrime(16);
console.log(result);
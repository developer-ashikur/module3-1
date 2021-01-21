
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const result = getFactorial(5);
console.log('factorial', result);
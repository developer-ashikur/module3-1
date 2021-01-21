function getMaxNum(num1, num2, num3) {
    let minValue = Math.min(num1, num2, num3);
    return minValue;
}
var result = getMaxNum(86745, 7858, 1000);
console.log('Smallest Number', result);
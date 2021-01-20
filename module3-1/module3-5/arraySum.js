function getArraySum(numbers) {
    var sum = 0;
for (let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
var numbers = [43, 56, 35, 74, 74, 21, 9];
var result = getArraySum(numbers);
console.log(result);
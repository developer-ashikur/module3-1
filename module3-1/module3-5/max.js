const num1 = 60;
const num2 = 50;
const num3 = 40;
if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' is the max number');
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' is the max number.')
}
else {
    console.log(num3 + ' is the max number.')
}

var result = Math.max(num1, num2, num3);
console.log(result + ' is the max number.');
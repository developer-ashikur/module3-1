console.log(1386);
var bananaPrice = 12;
console.log(bananaPrice);
var age = 24;
console.log(age);
var electricityBill = 1011;
console.log(electricityBill);
var wifiSpeed = 1024;
console.log(wifiSpeed);
var salary = 12000;
console.log(salary);
var temp = 12;
console.log(typeof temp);
var myName = "Md Ashikur Rahman";
console.log(myName);
var myDepartment = "Zoology";
console.log(typeof myDepartment);
var isCool = true;
var isPresent = false;
console.log(isCool);
console.log(typeof isPresent);

var promise = "I promise I will do HARD work to become a web developer";
console.log(promise.toUpperCase());
console.log(promise.toLowerCase());
console.log(promise.indexOf('web'));
console.log(promise.indexOf('hard'));
// console.log(promise.split('will'));
// console.log(promise.split("promise"));

var myCountry = "Bangladesh";
console.log(myCountry.toLowerCase());
console.log(myCountry.toUpperCase());
console.log(myCountry.split('g'));

var number1 = 25;
var number2 = '15.5';
// number2 = parseInt(number2);
// number2 = parseFloat(number2);
// number2 = + number2;
number1 = '' + number1;
console.log(number1 + number2);

var number3 = 0.1;
var number4 = 0.3;
// console.log(number3 + number4);
var total = number3 + number4;
total = total.toFixed(5);
console.log(total);

var x = 35;
var y = 25;
var jogKor = x + y;
console.log(jogKor);
var biyogKor = x - y;
console.log(biyogKor);
var gunKor = x * y;
console.log(gunKor);
var vagKor = x / y;
console.log(vagKor);
var vagSesh = x % y;
console.log(vagSesh);

var firstName = 'Ashikur';
var lastName = 'Rahman';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var productName = 'Alur Dam:';
var alurPrice = 24;
var showPrice = productName + ' ' + alurPrice + 'tk';
console.log(showPrice);

var number = 5.51145;
// var absoluteNumber = Math.abs(number);
// console.log(absoluteNumber);
// var result = Math.round(number);
// var result = Math.ceil(number);
var result = Math.floor(number);
console.log(result);

var lotary = Math.random();
var lotaryNumber = lotary * 100;
var winner = Math.round(lotaryNumber);
console.log(winner);

// conditionals

var biscuitsPrice = 10;
if (biscuitsPrice != 10) {
    console.log('I will eat the biscuits.')
}
else {
    console.log('khali cha khabo.')
}

var jobPaiso = false;
var savingAmount = 200000;
if (jobPaiso == true && savingAmount > 20000) {
    console.log('Asho patri khuji')
}
else if (savingAmount > 20000) {
    console.log('age bcs dia cakri paw, tarpor biye');
}
else {
    console.log('tomar biye hobe na')
}

// grade calculator
var message = 'Your result is: ';
var examNumber = 79;
if (examNumber > 80 && examNumber == 80) {
    console.log(message + 'A+');
}
else if (examNumber < 80 && examNumber > 70 || examNumber == 70) {
    console.log(message + 'A');
}
else if (examNumber < 70 && examNumber > 60 || examNumber == 60) {
    console.log(message + 'A-');
}
else if (examNumber < 60 && examNumber > 50 || examNumber == 50) {
    console.log(message + 'B');
}
else if (examNumber < 50 && examNumber > 40 || examNumber == 40) {
    console.log(message + 'C');
}
else if (examNumber < 40 && examNumber > 33 || examNumber == 33) {
    console.log(message + 'D');
}
else {
    console.log(message + 'Fail');
}

// time and date
var date = new Date();
console.log(date);
//convert inch to feet
function inchToFeet(inch) {
    var feet = inch / 3;
    return feet;
}
var naniFeet = inchToFeet(265);
console.log('Your converted value is: ' + naniFeet + ' feet');
var dadiFeet = inchToFeet(36);
console.log('Your converted value is: ' + dadiFeet + ' feet');

//convert farenheignt to celcius

function celciusToFaren(cels) {
    var fern = (cels * (9 / 5) + 32);
    return fern;
}

var nanirJor = celciusToFaren(37);
nanirJor = nanirJor.toFixed(2);
console.log('Nani tomar jor: ' + nanirJor + ' degree celcius');
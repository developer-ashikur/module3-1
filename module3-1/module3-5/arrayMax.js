//find the max value from an arry
var marks = [40, 30, 56, 50, 45, 98, 99];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    var elements = marks[i];
    if (elements > max) {
        max = elements;
    }
}
console.log('The highest number is ' + max);
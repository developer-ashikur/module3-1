var serial = [23, 3, 5, 3, 5, 3, 6, 3, 5, 32, 235, 6, 3, 566, 3, 6, 4, 75, 37, 4];
var finalList = [];
for (let i = 0; i < serial.length; i++){
    let element = serial[i];
    if (finalList.indexOf(element) == -1) {
        finalList.push(element);
    }
}
console.log(finalList)
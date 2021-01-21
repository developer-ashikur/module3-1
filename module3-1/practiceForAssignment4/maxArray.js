const marks = [45, 65, 63, 74, 98, 65, 43, 22];
let highest = marks[0];
for (let i = 0; i < marks.length; i++){
    let elements = marks[i];
    if (elements > highest) {
        highest = elements;
    }
}
console.log(highest);
const speech = 'my dream is to be a programmer.';
let count = 0;
for (let i = 0; i < speech.length; i++){
    let char = speech[i];
    if (char == ' ' && speech[i-1] != ' ') {
        count++
    }
}
count++;
console.log(count);
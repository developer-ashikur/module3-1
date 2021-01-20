var speech = 'i am Ashikur Rahman. I want to be a programmer.';
var word = 0;
for (let i = 0; i < speech.length; i++){
    var index = speech[i];
    if (index == ' ' && speech[i - 1] != ' ') {
        word++;
    }
}
word++;
console.log(word);
function reverseString(str) {
    let reverse = '';
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
const speech ='Hello aliens whats up...';
const reversedSpeech = reverseString(speech);
console.log(reversedSpeech);

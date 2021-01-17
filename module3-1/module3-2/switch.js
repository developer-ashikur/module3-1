//switch, case, break, default
//number spelling checker

var num = 5;
switch (num) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    default:
        console.log('Out of my range.');
}

//vowel consonant checker (use of multi-case)

var letter = 'I';
letter = letter.toLowerCase();

switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('The letter is vowel');
        break;
    default:
        console.log('The letter is consonant');
}
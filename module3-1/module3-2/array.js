var friendsAge = [12, 14, 17, 16];
friendsAge[2] = 20; //index number dhore kono element k array er moddhe set korlm
var sonaliAge = friendsAge[2]; //index number diye kono element k khuje ber korlm
console.log(sonaliAge);
var position = friendsAge.indexOf(20); //kono ekti element er index number ber korlm
console.log(position);
console.log(friendsAge.length);
// friendsAge.push(22);
// friendsAge.push(25);
// console.log(friendsAge);
// friendsAge.pop();
// console.log(friendsAge);
friendsAge.unshift(21);
friendsAge.unshift(28);
friendsAge.shift();
friendsAge.shift();
console.log(friendsAge);

var teaLine = ['abul', 'babul', 'cabul'];
teaLine.unshift('malam');
teaLine.unshift('mintu');
var part = teaLine.slice(2, 4);
console.log(part);
console.log(teaLine);

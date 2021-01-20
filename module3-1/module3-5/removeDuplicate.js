//remove duplicate elements from an arry
var serialNum = [1, 1, 3, 4, 6, 4, 3, 2, 6, 3, 4, 6, 2, 86, 56, 4, 6];
var uniqueNum = [];
for (let i = 0; i < serialNum.length; i++){
    let element = serialNum[i];
    let index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);

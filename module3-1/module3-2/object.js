var student1 = {id : 121, phone : 130046, studentName : 'abul'};
var student2 = {id : 121, phone : 1434, studentName : 'babul'};
//how to find the value of an object property? follw the following steps
var phoneNo1 = student1.phone;
var phoneNo2 = student1['phone'];
var phoneProName = 'phone';
var phoneNo3 = student1[phoneProName];


//how to change(update) a value from an object? follow the 3 steps
student2.phone = 1914;
student2['phone'] = 1775;
student2[phoneProName] = 00017593;

//add new property in an object
student2.cinema = 'ogni';
student2['food'] = 'banana';
console.log(phoneNo3);
console.log(student2);
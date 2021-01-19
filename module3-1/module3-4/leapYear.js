//check a year is leap year or not
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const checkYear = isLeapYear(2000);
if (checkYear == true) {
    console.log('The year is a Leap Year.');
}
else {
    console.log('The year is not a Leap Year.');
}

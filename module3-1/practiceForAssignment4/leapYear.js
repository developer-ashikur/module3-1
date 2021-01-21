function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return 'The year is Leap Year';
    }
    else {
        return 'The year is not a Leap Year.'
    }
}
console.log(checkLeapYear(2008));
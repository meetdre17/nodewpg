const monthNumber = 5;
let monthName = null;
let monthDays = null;
// let message = null;

switch (monthNumber) {
    case 1:
        console.log('January - 31 days');
        break
    case 2:
        console.log('February - 28 days in a common year and 29 days in leap years');
        break
    case 3:
        console.log('March - 31 days');
        break
    case 4:
        console.log('April - 30 days');
        break
    case 5:
        console.log('May - 31 days');
        break
    case 6:
        console.log('June - 30 days');
        break
    default:
        console.log('Please input a number bettwen 1 and 7');  
}
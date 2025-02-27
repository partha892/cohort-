let num = 5;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}



let day = 3; // EX 1 = Monday, 2 = Tuesday, etc.

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

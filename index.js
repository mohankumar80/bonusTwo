const readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.bold.yellowBright("Enter your name : "));
console.log(chalk.bold.yellowBright("Welcome "+userName+" !!"));
console.log(chalk.bold.yellowBright("Ready to find your's Birthday a prime number or not!!\n"));

var date = readlineSync.question(chalk.bold.greenBright("Enter your Date of Birth (DD/MM format) : "));

if(!date.includes('/')) {
    console.log(chalk.bold.redBright("Enter in the DD/MM format"));
}

var dateOfBirth = date.split("/");

function calculatePrime( a,b) {
    a = parseInt(a);
    b = parseInt(b);
    c = a+b;
    var counter = 0;
    for( i=2; i<=c; i++) {
        if( c%i == 0) {
            counter++;
        }
    }
   return (counter>1)? chalk.bold.redBright("Your Birthday is not a Prime Number"): chalk.bold.greenBright("Your Birthday is a Prime Number");
}

var result = 0;
if( dateOfBirth[1] == 1 || dateOfBirth[1] == 3 || dateOfBirth[1] == 5 || dateOfBirth[1] == 7 || dateOfBirth[1] == 8 || dateOfBirth[1] == 10 || dateOfBirth[1] == 12) {
    if( dateOfBirth[0] <= 31) {
        result = calculatePrime( dateOfBirth[0], dateOfBirth[1]);
        console.log(result);
    } else {
        console.log(chalk.bold.redBright("Days should be 31 or less in this month"));
    }
} else if ( dateOfBirth[1] == 4 || dateOfBirth[1] == 6 || dateOfBirth[1] == 9 || dateOfBirth[1] == 11) {
    if(dateOfBirth[0] <= 30 ) {
        result = calculatePrime( dateOfBirth[0], dateOfBirth[1]);
        console.log(result);
    } else {
        console.log(chalk.bold.redBright("Days should be 30 or less in this month "));
    }
} else if ( dateOfBirth[1] == 2) {
    if( dateOfBirth[0] <= 28) {
        result = calculatePrime( dateOfBirth[0], dateOfBirth[1]);
        console.log(result);
    } else {
        console.log(chalk.bold.redBright("Days should be 28 or less in this month"));
    }
} else {
    console.log(chalk.bold.redBright("Please enter a valid Date of Birth"));
}

console.log(chalk.bold.greenBright("\nIf your's Birthday a prime number, let me know by sharing it on Social Media!!"));
/*
// 1. Program to welcome the user if the city is Karachi
var city = prompt("Enter the city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

// 2. Program to greet the user based on gender
var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

// 3. Program to display message based on color of road traffic signal
var signalColor = prompt("Enter the color of the road traffic signal:");
switch(signalColor.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid signal color");
}

// 4. Program to check remaining fuel in car
var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Conditional statements with various conditions
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6. Program to calculate grade based on marks
var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade = '';

if (percentage >= 80) {
    grade = 'A+';
} else if (percentage >= 70) {
    grade = 'A';
} else if (percentage >= 60) {
    grade = 'B';
} else if (percentage >= 50) {
    grade = 'C';
} else if (percentage >= 40) {
    grade = 'D';
} else {
    grade = 'Fail';
}

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${totalObtainedMarks}\nPercentage: ${percentage}%\nGrade: ${grade}`);

// 7. Guess game
var secretNumber = 7; // Random secret number from 1 to 10
var userGuess = parseInt(prompt("Guess the secret number (from 1 to 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
}

// 8. Program to check if a number is divisible by 3
var numberToCheck = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (numberToCheck % 3 === 0) {
    alert(`${numberToCheck} is divisible by 3`);
}

// 9. Program to check if a number is even or odd
var numberToCheck = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (numberToCheck % 2 === 0) {
    alert(`${numberToCheck} is even`);
} else {
    alert(`${numberToCheck} is odd`);
}

// 10. Program to show message based on temperature
var temperature = parseInt(prompt("Enter temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Simple calculator
var firstNumber = parseFloat(prompt("Enter first number:"));
var secondNumber = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var calcResult
*/

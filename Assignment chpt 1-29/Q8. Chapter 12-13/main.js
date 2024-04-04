/*
Declare an empty array using JS literal notation to store student names in future:
var studentNamesLiteral = [];


Declare an empty array using JS object notation to store student names in future:
var studentNamesObject = new Array();


Declare and initialize a strings array:
var stringsArray = ["apple", "banana", "cherry"];

Declare and initialize a numbers array:
var numbersArray = [1, 2, 3, 4, 5];

Declare and initialize a boolean array:
var booleanArray = [true, false, true];

Declare and initialize a mixed array:
var mixedArray = ["apple", 2, true, "banana", false];

Declare and Initialize an array and store available education qualifications in Pakistan:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying the qualifications in the browser
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");



Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:


// Array to store student names
var studentNames = ["Aliyan", "Ahmed", "Khatri"];

// Array to store scores of students
var scores = [430, 380, 450]; // Assume scores out of 500 for each student

// Calculate percentages
var percentages = [];
for (var i = 0; i < scores.length; i++) {
    percentages.push((scores[i] / 500) * 100);
}

// Display scores and percentages
for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + " scored " + scores[i] + " out of 500, with a percentage of " + percentages[i] + "%.");
}



Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.



var colors = ["red", "green", "blue"];

document.write("<h3>Original Array:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// a. Add color to the beginning of the array
var colorToAddBegin = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBegin);

// Display the updated array
document.write("<h3>Array after adding color to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// b. Add color to the end of the array
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

// Display the updated array
document.write("<h3>Array after adding color to the end:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// c. Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");

// Display the updated array
document.write("<h3>Array after adding two more colors to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// d. Delete the first color in the array
colors.shift();

// Display the updated array
document.write("<h3>Array after deleting the first color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// e. Delete the last color in the array
colors.pop();

// Display the updated array
document.write("<h3>Array after deleting the last color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// f. Add a color to a specific position/index
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write("<h3>Array after adding a color at a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// g. Delete color(s) from a specific position/index
var indexToDelete = parseInt(prompt("Enter the index from which to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write("<h3>Array after deleting color(s) from a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");





Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.

var scores = [78, 92, 85, 63, 74];

console.log("Original array:", scores);

scores.sort();

console.log("Sorted array in ascending order:", scores);






Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Initialize an empty array for selected cities
var selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
selectedCities.push(cities[0], cities[2], cities[4]);

// Display selected cities
console.log("Selected cities:", selectedCities);





Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log(singleString);







Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)


var fifoQueue = [];

fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");

var firstElement = fifoQueue.shift();
console.log("First element dequeued:", firstElement);

var secondElement = fifoQueue.shift();
console.log("Second element dequeued:", secondElement);

var thirdElement = fifoQueue.shift();
console.log("Third element dequeued:", thirdElement);






Create a new array. Store values one by one in such a way

that you can access the values in reverse order. (Last In-
First Out)

// Initialize an empty array to act as a stack
var lifoStack = [];

// Push elements onto the stack
lifoStack.push("value1");
lifoStack.push("value2");
lifoStack.push("value3");

// Pop elements from the stack
var lastElement = lifoStack.pop();
console.log("Last element popped:", lastElement);

var secondLastElement = lifoStack.pop();
console.log("Second last element popped:", secondLastElement);

var thirdLastElement = lifoStack.pop();
console.log("Third last element popped:", thirdLastElement);



15. Write a program to store phone manufacturers (Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array.
    Display the following dropdown/select menu in your
    browser using document.write() method:
    
    
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");

manufacturers.forEach(function(manufacturer) {
    document.write("<option>" + manufacturer + "</option>");
});

document.write("</select>");


*/



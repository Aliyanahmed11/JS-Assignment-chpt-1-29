/*

Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.

var firstName = prompt("Enter Your First Name");
var LastName = prompt("Enter Your Last Name");
var fullName = console.log(firstName + " " + LastName);







Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser

var favMob = prompt("What's your favourite Mobile Phone model")
console.log(favMob)
console.log("Length o string is: " + favMob.length)





Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .

var string = "Pakistani"
console.log("String: " +string)
console.log("Index of 'n': "+ string.indexOf("n"));











Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.

var string = "Hello World"
console.log("String: " +string)
console.log("Index of 'l': "+ string.lastIndexOf("l"));









Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.

var string = "Pakistani";
console.log("String: " +string)
console.log("The Character at index 3 is: "+ string[3])









6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter Your First Name");
var LastName = prompt("Enter Your Last Name");
var fullName = console.log(firstName + " " + LastName);









Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.
var City = "Hyderabad"
var rpCity;

rpCity = City.replace("Hyder", "Islam")
console.log("City: ", City)
console.log("After Replacement:", rpCity)









Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together."
var rpMsg = message.replace(/and/g , "&")
console.log("String: "+ message);
console.log("After Replacement: "+ rpMsg);


Write a program that converts a string “472” to a number
472. Display the values & types in your browser.
var str = "472"
var conv = Number(str)
console.log("Value "+ str)
console.log("Type "+ typeof str)
console.log("Value "+ conv)
console.log("Type "+ typeof conv)








Write a program that takes user input. Convert and
show the input in capital letters.

var input = prompt("Enter in small letter")
var cap ;
cap = input.toUpperCase()
console.log(input);
console.log(cap)












Write a program that takes user input. Convert and
show the input in title case.


var name = prompt("Enter any name");   
var Cap = name[0].toUpperCase() + name.slice(1).toLowerCase()
console.log(Cap);













Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
var str = num.toString();
str = str.replace(".", "");
console.log(str)
console.log(typeof str)














Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .

Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64

var username = prompt("Enter your username:");


if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special symbols");
} else {
    alert("Username accepted: " + username);
}









You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:

var A = ["cake","apple pie","cookie","chips","patties"];
var B = prompt("Enter Bakery item")
B = B.toLowerCase()
var tree = false
for(var i=0; i<A.length; i++){
    if(B==A[i]){
        tree = true;
    }
}
if(tree == true){
    alert(B+" is available at index "+i+ " in our bakery")
}
else{
    alert("Sorry "+B+ " is not available in our bakery")
}






Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.



var password = prompt("Enter your password:");

var containsAlphabets = false;
var containsNumbers = false;
for (let i = 0; i < password.length; i++) {
    if ((password[i] >= 'A' && password[i] <= 'Z') || (password[i] >= 'a' && password[i] <= 'z')) {
        containsAlphabets = true;
    } else if (password[i] >= '0' && password[i] <= '9') {
        containsNumbers = true;
    }
}

if (!(containsAlphabets && containsNumbers) || password.length < 6 || !isNaN(password[0])) {
    alert("Please enter a valid password that meets the requirements:\n" +
    "- It should contain alphabets and numbers.\n" +
    "- It should not start with a number.\n" +
    "- It must be at least 6 characters long.");
} else {
    alert("Password accepted.");
}











Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
var university = "University of Karachi";
var uni2;
var uni3;
uni2 = university.split(" ")
uni3 = uni2.split(" ")
document.write(uni3);
var university = "University of Karachi";
var universityArray = university.split("");

for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i]+ "<br>");
}











Write a program to display the last character of a user
input.


var userInput = prompt("Enter a string:");
var lastCharacter = userInput.slice(-1);
console.log(userInput)
console.log("Last character: " + lastCharacter);















You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.


var str = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var count = 0;

// Convert both the string and the word to lowercase for case-insensitive comparison
str = str.toLowerCase();
wordToCount = wordToCount.toLowerCase();

// Split the string into words and count the occurrences of the word
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
        count++;
    }
}
console.log("Text: " +str)
console.log("Number of occurrences of '" + wordToCount + "':", count);




*/







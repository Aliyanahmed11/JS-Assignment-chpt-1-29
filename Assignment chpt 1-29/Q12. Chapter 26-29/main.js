/*

Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
var numb = prompt("Enter Number in float")

console.log("The Number is: "+numb)

 var round = Math.round(numb)
 console.log("The round of: "+round);
 
 var floor = Math.floor(numb)
 console.log("Floor function: "+floor);
 
 var ceil = Math.ceil(numb)
 console.log("Ceiling Function: "+ceil);
 
 
 







Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number

var numb = prompt("Enter Number in Neg float ")

console.log("The Number is: "+numb)

 var round = Math.round(numb)
 console.log("The round of: "+round);
 
 var floor = Math.floor(numb)
 console.log("Floor function: "+floor);
 
 var ceil = Math.ceil(numb)
 console.log("Ceiling Function: "+ceil);
 
 



3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5



var number = prompt("Enter a number:");

var absoluteValue = Math.abs(number);
console.log("Absolute value:", absoluteValue);

 









Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:

var dice = Math.random()*6+1;
var dice2 =  Math.floor(dice);
console.log("Random Dice value is: "+dice2);









Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser

var coin = Math.random()*2+1;
var dice2 =  Math.floor(coin);
// console.log("Random Coin value is: " + dice2);
if(dice2 == 2){
    console.log(dice2)
    console.log("Random coin value: Heads")
}
else{
    console.log(dice2)

    console.log("Random coin value: Tails")

}












Write a program that shows a random number between 1
and 100 in your browser.

var num = Math.random()*100+1;
console.log("Random number between 1 and 100: "+ Math.floor(num));













Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms

var userInput = prompt("Enter your weight:");

    if (userInput.includes('kg') || userInput.includes('kilogram')) {
        console.log("Your weight is:", userInput, "kilograms");
    } else {
        console.log("Your weight is:", userInput, "kgs");
    }
    
    






Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.

var secNum = 3;
var user = prompt("Enter secret num from 1-10")
if(user == secNum){
    alert("Congratulations")
}else{
    alert("Try Again..")
}

*/




/*Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value 
by 3. 
l. Output : “The remainder is : 0”.

// a. Declare a variable.
var myVariable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = myVariable % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is : " + remainder + "<br>");



4. Cost of one movie ticket is 600 PKR. Write a script to 
store
ticket price in a variable & calculate the cost of buying 5 
tickets
to a movie.

var cost = 600;
var number_of_tickets= 5;
var total = ("Total cost to buy " + number_of_tickets + " tickets to a movie is: " + cost*number_of_tickets + " PKR")
document.write(total);

5. Write a script to display multiplication table of any 
number in your browser
var table_num = 7;
for (var i=1; i<= 10; i++){
    document.write(table_num + " x " + i + " = " + table_num*i + "<br>");
}


. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.

var cel = 15;
var far = 70;
var farform;
farform= ((cel*9/5)+32)
celform= ((far - 32)*5/3)
document.write(cel+"C"+  " is " + farform + "F" + "<br>")
document.write(far+"F"+  " is " + celform + "C")

var disc = document.querySelector(".shop")
disc.innerText = ("Shopping cart")

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var totalCostOfItem1 = priceOfItem1 * orderedQuantityOfItem1;
var totalCostOfItem2 = priceOfItem2 * orderedQuantityOfItem2;
var subtotal = totalCostOfItem1 + totalCostOfItem2;
var shippingCharges = 100;
var totalCost = subtotal + shippingCharges;

document.write("Price of Item 1: " + priceOfItem1 + " PKR<br>");
document.write("Ordered Quantity of Item 1: " + orderedQuantityOfItem1 + "<br>");
document.write("Total Cost of Item 1: " + totalCostOfItem1 + " PKR<br>");
document.write("<br>");
document.write("Price of Item 2: " + priceOfItem2 + " PKR<br>");
document.write("Ordered Quantity of Item 2: " + orderedQuantityOfItem2 + "<br>");
document.write("Total Cost of Item 2: " + totalCostOfItem2 + " PKR<br>");
document.write("<br>");
document.write("Subtotal: " + subtotal + " PKR<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("<br>");
document.write("Total Cost (including shipping charges): " + totalCost + " PKR");

Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser

var Tot_mark = 980
var obt_mark = 804
var percent = ((obt_mark/Tot_mark)*100);
document.write("<h2>Marks Sheet</h2>")
document.write("Total Marks: "+ Tot_mark + "<br>")
document.write("Obtain Marks: "+ obt_mark + "<br>")
document.write("Percentage: "+ percent);

Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
    and 1 Saudi Riyal = 28 Pakistani Rupee)
    
    var dollar = 10;
    var riyal = 25;
    var d_convert = dollar*104.80;
    var r_convert = riyal*28;
    var Pak_Rupee = d_convert+riyal;
    document.write("Total Currency in PKR is: " +Pak_Rupee);
    
    
    

    10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression




Write a program to initialize a variable with some 
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression

var num;
num = (((num + 5)*10)/2)

The Age Calculator: Forgot how old someone is? 
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values.
Output them to the screen like so: “They are either NN or NN
years old”.

var currentYear = 2024
var birthYear = 2004
var age = currentYear - birthYear;
document.write("<h2>Age Calculator</h2>")
document.write("Your Age is: " + age)




The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference;
var area;
circumference= (2*3.142*radius)
area= ((radius*radius)*3.142);
document.write("Radius of a Circle: "+ radius + "<br>")
document.write("The Circumfference is: "+ circumference + "<br>")
document.write("The Area of Circle: "+ area)



The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is? 
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "Walls Feast";

var currentAge = 20; 

var maximumAge = 80;
var snacksPerDay = 1; //
var yearsLeft = maximumAge - currentAge;
var snacksNeeded = yearsLeft * 365 * snacksPerDay;
document.write("You will need "+ snacksNeeded +" "+ favoriteSnack, " to last you until the ripe old age of ", maximumAge);
*/




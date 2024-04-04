/*Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:


document.write("Result: <br> ");
var a = 10;
document.write("The Value of a is: a <br>")
var a1 = ++a;
document.write("........................................... <br><br>")
document.write("The Value of ++a is: "+ a1 + "<br>")
document.write("Now the value of a is: "+ a + "<br><br>")
var a2 = a++;
document.write("The Value of a++ is: "+ a2 + "<br>")
document.write("Now the value of a is: "+ a + "<br><br>")
var a3 = --a;
document.write("The Value of --a is: "+ a3 + "<br>")
document.write("Now the value of a is: "+ a + "<br><br>")
var a4 = a--;
document.write("The Value of a-- is: "+ a4 + "<br>")
document.write("Now the value of a is: "+ a + "<br><br>")




What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
1
--a - --b;
0-1=-1
--a - --b + ++b;
-1- 0 + 1=0
--a - --b + ++b + b--;
-2 - 0 + 1 + 2 = -1


var a = 2, b = 1;
document.write("a is ", a, "<br>" )
document.write("b is: ", b,"<br>")

var result = --a - --b + ++b + b--;
document.write("Result is: ", result);




Write a program that takes input a name from user & 
greet the user

var username= prompt("What's your name")
alert("Hello "+ username + " Welcome to our Website");

. Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default.


var table= prompt("Enter a number to display table on browser")
for (var i=1 ; i<=10 ; i++){
    document.write(table + "x" + i + "=" + table*i+ "<br>" );

}




a) Take three subjects name from user and store them in 3 
different variables.
b) Total marks for each subject is 100, store it in another 
variable.
c) Take obtained marks for first subject from user and 
stored it in different variable.
ALERTS | JAVASCRIPT
Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables.
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table)



var englishMark = prompt("Enter Marks of English")
var mathsMark = prompt("Enter Marks of MAths")
var urduMark = prompt("Enter Marks of Urdu")
var engtotal = 100
var mathstotal = 100
var urdutotal = 100
document.write("<b>Subject</b> " + " <b>Total Marks</b> "+" <b>Obtained Marks</b> " + " <b>Percentage</b><br> ")
document.write("English "+ "  "+"  "+"  " +"  "+ engtotal +"  "+"  "+"  "+"  "+ englishMark +"  "+"  "+"  "+"  "+ (englishMark/engtotal)*100+ "%"+ "<br>")
document.write("Maths "+ "  "+"  "+"  " +"  "+ mathstotal +"  "+"  "+"  "+"  "+ mathsMark+"  "+"  "+"  "+"  "+ (mathsMark/mathstotal)*100 + "%"+ "<br>")
document.write("Urdu "+ "  "+"  "+"  " +"  "+ urdutotal +"  "+"  "+"  "+"  "+ urduMark+"  "+"  "+"  "+"  "+ (urduMark/urdutotal)*100 + "%" + "<br>")


*/






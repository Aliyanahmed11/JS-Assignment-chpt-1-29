/*
Declare and initialize an empty multidimensional array.
(Array of arrays)

var arr=[];




Declare and initialize a multidimensional array
representing the following matrix:
var matrix = [
    [0,1,2,3]
    [1,0,1,2]
    [2,1,0,1]
]

Write a program to print numeric counting from 1 to 10.
for (var i=1; i<=10; i++){
    console.log(i);
}



Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.

var user = prompt("Enter a number for table");
var length = prompt("Enter length of given table")

for(var i=1; i<=length; i++)
{
    document.write(user+ " X " +i+ " = " + user*i +"<br />" );
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i]);
}


Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




document.write("a. Counting: ");
  for (let i = 1; i <= 15; i++) {
      document.write(i + ", ");
  }
  document.write("<br>");

  // Reverse counting
  document.write("b. Reverse counting: ");
  for (let i = 10; i >= 1; i--) {
      document.write(i + ", ");
  }
  document.write("<br>");

  // Even numbers
  document.write("c. Even: ");
  for (let i = 0; i <= 20; i += 2) {
      document.write(i + ", ");
  }
  document.write("<br>");

  // Odd numbers
  document.write("d. Odd: ");
  for (let i = 1; i <= 19; i += 2) {
      document.write(i + ", ");
    }
    document.write("<br>");
    
    // Series
    document.write("e. Series: ");
    for (let i = 1; i <= 10; i++) {
        document.write((i * 2) + "k, ");
    }
    
    7. You have an array
    A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
    Write a program to enable “search by user input” in an
    array.
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var B = prompt("Search for check is it exist in an array")
    var tree = false;
for(var i = 0; i<=A.length; i++){
    if(B==A[i]){
       tree = true;
       break;
       // console.log("Exist")
       
    }
    
}
if(tree == true)[
    console.log(B +" is available at index "+ i+ " in our bakery")
]
else{
    console.log("We are Sorry "+ B + " is not available in our bakery")
}







Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].

var arr = [24, 53, 78, 91, 12];
var largest = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("The array is: " +arr)
console.log("The Largest Number in an array is "+ largest)






9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]


var arr = [24, 53, 78, 91, 12];
var smallest = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("The array is: " +arr)
console.log("The Smallest Number in an array is "+ smallest)





Write a program to print multiples of 5 ranging 1 to
100.
console.log("Multiples of 5 ranging from 1 to 100:");

for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}



*/










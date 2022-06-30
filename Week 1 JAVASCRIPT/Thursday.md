1. `Print special numbers:` In this exercise you must use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100. Remember that you should not print each number, you should use a flow control structure to perform the exercise.

```Javascript
/* 
===========================
        Using For
===========================
*/
var result = null;   //this variable will store the even numbers

for (var i = 0; i <= 100; i++) {
    
    if((i % 2) == 0){
        result = result + i + ' ';
    }

}

//Showing all the even numbers in console
console.log('The even numbers using FOR, from 0 to 100 are: ' + result);


/* 
===========================
        Using While
===========================
*/

result = null;      //setting the result null again
var number = 0;     //initializing number from 0

while (number <= 100) {

    if((number % 2) == 0 ){
        result = result + number + ' ';
    }
    
    number++;
}

//Showing all the even numbers in console
console.log('The even numbers using WHILE, from 0 to 100 are: ' + result);


/* 
===========================
        Using DO WHILE
===========================
*/

result = null;      //setting the result null again
number = 0;         //initializing number from 0

do {
    
    if((number % 2) == 0 ){
        result = result + number + ' ';
    }
    
    number++;
} while(number <= 100);

//Showing all the even numbers in console
console.log('The even numbers using DO WHILE, from 0 to 100 are: ' + result);
```

2. `Bad Code:` The code shown below is not working in the right way, as a task you must find the error made by the developer who programmed this code and correct it, for this exercise you must explain what the error is and place the correct code.

```Javascript
/*
first of all, the structure of the conditional if is wrong, 
it should be as follows 'if (cond = true)' using only 2 parentheses
secondly, within the 'if' condition an assignment was made and not an equalization 
so the code was changed from '(cond = true)' to '(cond == true)'
*/

var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} 
else {
  console.log('The cond variable is false');
}
```

3. `Bad Code 2:` You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly.

```Javascript
var n = 1000; //using another number to check the other conditionals

if (n == 100) {
  console.log('This is a special number!');
}
else if (n < 1000 && (n % 10) == 0 && n != 100) {
  console.log('This number is almost special');
} 
else {
  console.log('Just a regular number');
}
```

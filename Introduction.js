console.log("Hello Vaisvik");
let value=599;
let amount=59.36;
console.log(value);
console.log(amount);

//length function
let string = ("Hello this is vaisvik here");
console.log(string.length);
console.log("hey".length);

//boolean condtion
let a = 15;
let b = 10;
if(a>b)
console.log("True");
else
console.log("false");

//random function
console.log(Math.random());

//floor function
console.log(Math.floor(6.98));

//Arithmatic operator
console.log(a+b);
console.log(a-b);
console.log(a*a);
console.log(a/b);
console.log(a%b);

/*Remainder/modulo operator*/
//const WeeksInYear = (365/7);
//console.log(WeeksInYear);
const WeeksInYear = Math.floor(365/7);
console.log(WeeksInYear);  
const daysLeft = (365%7);
console.log(daysLeft);
console.log("A year has " + WeeksInYear +" weeks and" + daysLeft + " days");

//Assignment Operator
let num=5;
num = num +10;
num += 10;
console.log(num);
let num1=15;
num1 = num1 -10;
num1 -= 2;
console.log(num1);

//String interpolation

let age = 23;
console.log("Vaisvik is "+ age +" years old");
console.log(`Vaisvik is ${age} years old`);

//undefined value
var q;
console.log(q);

//variables
var name1 = "vaisvik"
let age1 = 23;
const salary = "Up"
console.log(name1,age1,salary)

//Template literals

let name2= "vaisvik"
console.log(`Hello,${name2}`)
console.log(`vaisvik is ${50-27} years old`)

//let const keyword
let count;
console.log(count);
count=5;
console.log(count);

/*const data = 25;
data = 8;
console.log(data)*/

//string concatenation
let animal = "lion";
let area = "jungle";
let display = animal+" is in " +area;
console.log(display);

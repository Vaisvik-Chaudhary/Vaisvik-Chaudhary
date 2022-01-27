//Arrow function with two arguments
let a,b;
let sum = (a,b) =>{
return a+b;
}
console.log(sum(10,5))

//Arrow function with no arguments
let word = () =>{
    console.log("Vaisvik");
}
word();

//Arrow function with a asingle argument
let type = weight =>{
console.log(`My weight is ${weight} kg`);
}
type(60);

//Concise arrow function
let mul = (p,q) =>  p*q;
console.log(mul(15,2));


//Functions

function add(n1,n2){
return n1+n2;
}
console.log(add(12,13));

//Anonymous Functions
let sub =function(val){
   console.log(val);
}
sub(25-10)

//Function Expression
function multi(x,y){
let z = x*y;
return z;
};
console.log("Multiplication :"+ multi(5,10));

//return keyword
function div(no1,no2){
return no1/no2;
}
console.log(div(10,5))

//Calling function
function mod(v1,v2){
    return v1%v2;
}
console.log(mod(20,5))

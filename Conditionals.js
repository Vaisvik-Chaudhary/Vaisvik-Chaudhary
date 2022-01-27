//logical OR
console.log(true||true);
console.log(10||0);
console.log(20>5||15<10);
console.log(false||false);

//logical AND
console.log(true&&true);
console.log(0&&1);
console.log(20>10 && 15<50);
console.log(false&&false);

//Ternary opertor
let price = 10.5;
let day = "monday";
day === 'monday' ? console.log("true") : console.log("false");


//else statement
let a=15;
if(a=15)
    console.log("True");
else
    console.log("False");


//Switch statement
let value = 50;
switch(value) {
    case '25':
        console.log("Smaller Number");
        break;
    case '60':
        console.log("Larger Number");
        break;
default:
        console.log("Exact Number");
}

//if statement

let data = true;
if(data)
    console.log("Valid data")


//Logical operator !
let p = true;
let q = !p;
console.log(q);


//Comparison Operators
console.log(5>6) 
console.log(15>=6)
console.log(5<6) 
console.log(8<=6) 
console.log(5==6) 
console.log(5==='6') 
console.log(5===5) 


//else-if block
let area = 50;
if(area>100)
console.log("Big area")
else if(area>60)
console.log("Medium area")
else if(area<30)
console.log("small area")
else
console.log("Average area")
//Functions assigned to variables
let value = (number) =>{
    return number + 5;
};
let f = value;
console.log(value(3));
console.log(f(10));

//callback function
let even =(n) =>{
    return n%2==0;
}
let msg = (evenFunc,num) =>{
    let numEven = evenFunc(num);
    console.log(`The number ${num} is an even number : ${numEven}`)
}
msg(even,4);

//array method.reduce()
let arr1 = [1,5,6,3];
let reducer = (pv,cv) => pv+cv;
console.log(arr1.reduce(reducer));
console.log(arr1.reduce(reducer,8));

//array method .for each()
let arr2 = [2,5,'abc'];
arr2.forEach((element,index) => console.log(index,element));

//array method .filter()
let words = ['apple','banana','watermalon','papaya'];
let result = words.filter(words => words.length>5);
console.log(result);

//array method .map()
let a1=[2,5,6,3]
let mul = a1.map(a1 => a1*2);
console.log(mul);
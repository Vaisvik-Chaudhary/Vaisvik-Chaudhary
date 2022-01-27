//Global scope
let a = 'hey';
function h1(){
    a=6;
}
console.log(a);
h1();
console.log(a);

//Local scope
let p="hello ";
function p1(){
    let q =" how r u"
    console.log(p+q)
}
p1();


//block scoped and global 
let x = 'hello ';
function demo(){
    let y = "World ";    //local variable
    console.log(x+y);

    if(y == 'World'){
        let z = "Hey";   //block-scoped variable
        console.log(x+y+z);
    }
    console.log(x+y+z);   //z can't be accessed here
}
demo();
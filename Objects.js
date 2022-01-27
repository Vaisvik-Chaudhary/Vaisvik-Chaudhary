//dot notation for accessing object properties
let mango = {
    color: 'orange',price:{
        bulk:`$5/kg`,smallqty:`$7/kg`
    }
};
console.log(mango.color);
console.log(mango.price.bulk);

//accessing non-existance javascript properties
let car = {
    name:'city'
}
console.log(car.modelname);

//mutable and delete operator
const student = {
    name: 'abc',rollno: 45,score:89,gread:'B'
}
console.log(student);
delete student.gread
student.score =82
console.log(student);


//for...in loop
let object = {a:1,b:2,c:3};
for(let value in object){
    console.log(`${value} : ${object[value]}`);
}

//passing object as an arguments
let origNum = 5;
let orijObj = {color:'green'};
let change = (num,obj) =>{
    num = 8;
    obj.color = 'yellow'
};
change(origNum,orijObj);
console.log(origNum);
console.log(orijObj.color);


//object methods
let total ={
    sum(value){
        console.log(`Total sum is ${value}`);
    },
    sub:() =>{
        console.log(`Substraction is ...`);
    },
};
total.sum(5+7);
total.sub();

//JavaScript destructuring assignment shorthand syntax
let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
[a,b,...rest] = [10,20,30,40,50,60];
console.log(rest);

//shorthand property name syntax for object creation
let activity = 'walking';
let footpath = {activity};
console.log(activity);

//this keyword
let test = {
    pass:40,
    func:function(){
        return this .pass;
    },
};
console.log(test.func());

//this function
let div = {
    boys:68,total:100,
    girls(){
        return this.total - this.boys;
    }
}
console.log(div.girls());

//JavaScript Arrow Function this Scope
let list = {
    data : 'xyz',
    item1:() => {console.log(this.dat);},
    item2() {console.log(this.data);},
};
list.item1();
list.item2();

//getters 
let p = {
    data:[8,9,5],
    get latest(){
        if(this.data.length === 0){
            return undefined;
        }
        return this.data[this.data.length-1];
    }
};
console.log(p.latest);

//setter
let language = {
    set current(name){
        this.info.push(name);
    },
    info:[]
};
language.current = 'EN';
language.current = 'GUJ';
console.log(language.info);

//factory function
function id(fname,lname){
    return{
        fname:fname,
        lname:lname,
        getfullname(){
            return fname+' '+lname;
        },
    };
}
let p1 = id('vaisvik','chaudhary');
console.log(p1.getfullname());

//javascript getters and setters restricted
let cat ={
    _name: "mini",
    get name(){
        return this._name;
    },
    set name(newname){
        this._name =newname;    
    }
};
console.log(cat.name);        //reference invokes the getter
cat.name = 'nini';          //assignment invokes the setter
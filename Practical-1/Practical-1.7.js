let objectArray = [ // array of objects
    {
        "name": "vaisvik",
        "gender": "male",
        "age": 23
    },
    {
        "name": "ronak",
        "gender": "male",
        "age": 25
    },
    {
        "name": "rutu",
        "gender": "female",
        "age":29
    }
   
]

let object = { //object
    "name": "vaisvik",
    "gender": "male",
    "age": 23
}

const check = (obj, arrOfObj) => {
    const output = arrOfObj.find( i =>i.name === obj.name && i.gender === obj.gender && i.age === obj.age );
    if(output === undefined){
        return false; //both are not same then return false
    }
    else{
        return true; // both are same then return true
    }
}

console.log(check(object, objectArray));
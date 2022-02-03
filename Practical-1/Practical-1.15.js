let objectArray = [    //array of object
    {
        "name": "vaisvik",
        "gender": "male",
        "age": 23,
    },
    {
        "name": "ronak",
        "gender": "male",
        "age": 25,
    },
    {
        "name": "rutu",
        "gender": "male",
        "age": 22,
    },
    
]

let object = {   //object
    "name": "rutu",
    "gender": "female",
    "age":22,
}

const check = (obj, arrOfObj) => {
    const output = arrOfObj.find(i => i.name === obj.name && i.gender === obj.gender && i.age === obj.age); // check if data exist then return those data
    if(output === undefined){ // if output object is undefined then push the data
        arrOfObj.push(obj);
    }
    else{
        return "no new data" // else return no data found
    }
    return arrOfObj
}

console.log(check(object, objectArray)); // function call and return data display
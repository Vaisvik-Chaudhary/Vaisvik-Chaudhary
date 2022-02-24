
const patients = [{
    "name": "James",
    "ailments": ["Cough", "Cold", "Fever"]
    },
    {
    "name": "George",
    "ailments": ["Blood Pressure"]
    },
    {
    "name": "Robert",
    "ailments": ["Cough", "Cold", "Fever"]
    },
    {
    "name": "Mary",
    "ailments": ["Diabetes"]
    },
    {
    "name": "Patricia",
    "ailments": ["Blood Pressure"]
    }];
    
const funPerformOperation = arr => {
    const anotherArray = [{
        "name": "Christopher",
        "ailments": ["Dengue"]
        },
        {
        "name": "Thomas",
        "ailments": ["Diabetes"]
        },
        {
        "name": "Anthony",
        "ailments": ["Fatigue", "Cold", "Fever"]
        }
    ];

    const res1 = arr.concat(anotherArray);
    console.log("1. Append all element ------------>");
    console.log(res1);

    const nameToRemove = "George";
    const filteredPatients = res1.filter((item) => item.name !== nameToRemove)
    console.log("2. Delete name George ------------>");
    console.log(filteredPatients);

    const addobj = {
        "name": "Abc",
        "ailments": ["Covid", "Cancer"]
    };
    let newarr = [addobj, ...filteredPatients];
    console.log("3. Add one patient at the beginning of the array ------------>");
    console.log(newarr);

    objIndex = newarr.findIndex((obj => obj.name === 'Christopher'));
    newarr[objIndex].ailments = ["Dengue","Covid"];
    console.log("4. Update the ailments of a patient having name Christopher ------------>");
    console.log(newarr);

    newarr.pop();
    console.log("5. Delete one patient from the end of the array ------------>");
    console.log(newarr);

    newarr.shift();
    console.log("6. Delete one patient from the beginning of the array ------------>");
    console.log(newarr);

    const addObjAtIndex = {
        "name": "Abc",
        "ailments": ["Covid", "Cancer"]
    };
    newarr.splice(4, 0, addObjAtIndex);
    console.log("7. Insert one patient somewhere within the array at index 4. ------------>");
    console.log(newarr);

    const findArray = newarr.find(element => element.ailments = "Diabetes" );
    console.log("8. Using the find method, find the patients having Diabetes. ------------>");
    console.log(findArray);

    
    console.log("9. Reverse the order of all the array objects. ------------>");
    console.log(newarr.reverse());
};

console.log(funPerformOperation(patients));
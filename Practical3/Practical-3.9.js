const array = ["Vaisvik Chaudhary","Ronak Chaudhary", "Mohit Shah","Bharghav Dobariya","Divyansh Bhatnagar"];

const AddValidate = (array, addName) => {
    const Name = "/"+addName+"/i";
    const checkString = array.includes(Name);

    if(checkString === false){
        const regex = new RegExp(`^([A-Za-z]+)+[A-Za-z]+([']?)[A-Za-z]+$`,'g');
        let result = regex.test(addName);
        if(result === true){
            array.push(addName);
        } else {
            console.log("Validation Failed!!!");
        }

    } else {
        console.log("Name is already in array. Please, try again with different name.");
    }
    return array;
};


console.log(AddValidate(array, "Vaisvik Chaudhary"));
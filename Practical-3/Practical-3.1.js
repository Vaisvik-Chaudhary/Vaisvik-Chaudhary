var objtech=[
    {
      "_id": 1,
      "fullName": "Aayush Adeshara",
      "college": "Government Engineering College, Gandhinagar",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 2,
      "fullName": "Akshit Modi",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "DevOps"
    },
    {
      "_id": 3,
      "fullName": "Apexa Patel",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 4,
      "fullName": "Bhargav Dobariya",
      "college": "VVPEC, Rajkot",
      "technologyAssigned": "Flutter"
    },
    {
      "_id": 5,
      "fullName": "Chetan Punani",
      "college": "LDCE, Navrangpura",
      "technologyAssigned": "VueJS"
    },
    {
      "_id": 6,
      "fullName": "Dhruval Mayavanshi",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "UI/UX"
    },
    {
      "_id": 7,
      "fullName": "Divyansh Bhatnagar",
      "college": "ADIT, Anand",
      "technologyAssigned": "ReactNative"
    },
    {
      "_id": 8,
      "fullName": "Ishita Shah",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "VueJS"
    },
    {
      "_id": 9,
      "fullName": "Jaykumar Bhatt",
      "college": "Marwadi University, Rajkot",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 10,
      "fullName": "Jemis Maru",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "VueJS"
    },
    {
      "_id": 11,
      "fullName": "Kalpin Gajjar",
      "college": "GEC, Gandhinagar",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 12,
      "fullName": "Khushbu Rajgor",
      "college": "LJ institute of Computer Applications",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 13,
      "fullName": "Krushit Dudhat",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 14,
      "fullName": "Lav Panchal",
      "college": "K S School of business management",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 15,
      "fullName": "Manish Rathod",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 16,
      "fullName": "Meet Acharya",
      "college": "TIMSCDR",
      "technologyAssigned": "ReactJS"
    },
    {
      "_id": 17,
      "fullName": "Mohit Shah",
      "college": "LJIET, Sarkhej",
      "technologyAssigned": "VueJS"
    },
    {
      "_id": 18,
      "fullName": "Pranav Dodiya",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 19,
      "fullName": "Priyanka Manna",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 20,
      "fullName": "Rahul Shah",
      "college": "K S School Of Business Management",
      "technologyAssigned": "UI/UX Designer"
    },
    {
      "_id": 21,
      "fullName": "Raj Panchal",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 22,
      "fullName": "Rohan Deshpande",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "ReactJS"
    },
    {
      "_id": 23,
      "fullName": "Rutvik Patel",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "VueJS"
    },
    {
      "_id": 24,
      "fullName": "Smit Akhani",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 25,
      "fullName": "Sumit Kadiya",
      "college": "Government Engineering college",
      "technologyAssigned": "React JS"
    },
    {
      "_id": 26,
      "fullName": "Vaisvik Chaudhary",
      "college": "Nirma Uniersity",
      "technologyAssigned": "ROR"
    },
    {
      "_id": 27,
      "fullName": "Vinayak Chavan",
      "college": "VGEC, Chandkheda",
      "technologyAssigned": "NodeJS"
    },
    {
      "_id": 28,
      "fullName": "Vinayak Varsani",
      "college": "BHGCET Rajkot",
      "technologyAssigned": "ROR"
    }
  ]
  const AssignTechnology = (obj) => {
    const arr = [];
    let check = null ;

    obj.forEach(element => {
        let counter = 0;
        arr.forEach( array => {
            check = array.includes(element["technologyAssigned"]);
            if(check === true){
                counter++;
            }
        });

        if(counter === 0){
            arr.push(element["technologyAssigned"]);
        } 
    }); 
    

    let resultFinal = {};
    
    arr.forEach( array => {
      const tempObj = [];
      let tempKey = null;

        obj.forEach( objArr => {
            if(array === objArr["technologyAssigned"]){
                if(objArr["technologyAssigned"] === "ROR"){
                    tempKey = "ROR";
                    tempObj.push(objArr); 

                } else if(objArr["technologyAssigned"] === "DevOps"){
                  tempKey = "DevOps";
                    tempObj.push(objArr);
                   
                } else if(objArr["technologyAssigned"] === "NodeJS"){
                  tempKey = "NodeJS";
                    tempObj.push(objArr);
                    
                } else if(objArr["technologyAssigned"] === "Flutter"){
                  tempKey = "Flutter";
                    tempObj.push(objArr);
                   
                } else if(objArr["technologyAssigned"] === "VueJS"){
                  tempKey = "VueJS";
                    tempObj.push(objArr);
                    
                } else if(objArr["technologyAssigned"] === "UI/UX"){
                  tempKey = "UI/UX";
                    tempObj.push(objArr);
                   
                } else if(objArr["technologyAssigned"] === "ReactNative"){
                  tempKey = "ReactNative";
                    tempObj.push(objArr);
                   
                } else if(objArr["technologyAssigned"] === "ReactJS"){
                  tempKey = "ReactJS";
                    tempObj.push(objArr);
                   
                }

            }      
        });
  

     let resultObj = {
        [tempKey] : Object.values(tempObj)
      };

      resultFinal = Object.assign(resultFinal,resultObj);
    });
  
    return resultFinal;
};

console.log(AssignTechnology(objtech));
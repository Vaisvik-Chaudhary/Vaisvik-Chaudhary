const trainee = {
    _id: 1,
    firstName: "Vaisvik",
    lastName: "Chaudhary",
    aboutMe: "Trainee",
    profileImage: "users/1.png",
    academicDetails: {
    highestQualification: "B.Tech.",
    college: "Nirma",
    university: "Nirma",
    passoutYear: 2021
    },
    contactDetails: {
        primaryEmailID: "vaisvik.chaudhary@bacancy.com",
        alternateEmailID: "abc@gmail.com",
        primaryContactNo: 9448396584,
        alternateContactNo: 6758625450,
    },
    technologyAssigned: "ROR"
}
    

const traineedup = JSON.parse(JSON.stringify(trainee));;

traineedup.firstName = "Ronak";
traineedup.lastName = "Chaudhary";
traineedup.contactDetails.primaryEmailID = "ronak.chaudhary@bacancy.com";

console.log(trainee);
console.log(traineedup);
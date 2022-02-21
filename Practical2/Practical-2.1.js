class Person {

    constructor(fullName, email, contactNum) {
        this.fullName = fullName;
        this.email = email;
        this.contactNum = contactNum;
    }

    display() {
        console.log(`Name: ${this.fullName}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact No.: ${this.contactNum}`);
    }

}

class Trainee extends Person{

    constructor(fullName, email, contactNum,highestQualification, college, university, passoutYear) {
        super(fullName, email, contactNum);
        this.highestQualification = highestQualification;
        this.college = college;
        this.university = university;
        this.passoutYear = passoutYear;
    }

    display() {
        super.display();
        console.log(`Highest Qualification: ${this.highestQualification}`);
        console.log(`College: ${this.college}`);
        console.log(`University: ${this.university}`);
        console.log(`Passout Year: ${this.passoutYear}`);
    }
}

let trainee = new Trainee("Vaisvik Chaudhary", "vc@gmail.com", 5236987552, "", "Nirma", "Nirma University", 2021);
trainee.display();

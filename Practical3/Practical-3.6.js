// program to clone the object

// declaring object
const Employee = {
    employeeID:23,
    name: 'Vaisvik Chaudhary',
    emailID: 'vaisvik.chaudhary@bacancy.com',
    department: 'ROR',
    desgination: 'Trainee Engineer'
    
    
}

// cloning the object
 cloneEmployee = Object.assign({}, Employee);

console.log(cloneEmployee);
{
// changing the value of clonePerson
cloneEmployee.employeeID = '4';
cloneEmployee.name = 'Ronak';
cloneEmployee.emailID = 'ronak.chaudhary@bacancy.com';
cloneEmployee.department = 'JAVA';
cloneEmployee.desgination = 'Trainee Engineer';

console.log(cloneEmployee);

}



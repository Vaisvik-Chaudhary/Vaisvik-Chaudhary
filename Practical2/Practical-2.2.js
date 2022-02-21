class Employee {
  organisationName = "Bacancy";
  constructor(
    employeeId,
    department,
    designation,
    technologiesKnown,
    dateOfJoining,
    experience
  ) {
    this.employeeId = employeeId;
    this.department1 = department;
    this.designation1 = designation;
    this.technologiesKnown = technologiesKnown;
    this.dateOfJoining = dateOfJoining;
    this.experience = experience;
  }
  get department() {
    return this.department;
  }
  get designation() {
    return this.designation;
  }
  get technologiesknown() {
    return this.technologiesKnown;
  }
  set department(department1) {
    if (department1 === "") {
      throw "data required";
    }
    this.department = department1;
  }
  set designation(designation1) {
    if (designation1 === "") {
      throw "data required";
    }
    this.designation = designation1;
  }
  set technologiesKnown(technologiesKnown1) {
    if (technologiesKnown1 === "") {
      throw "data required";
    }
    this.technologiesKnown = technologiesKnown1;
  }
}

let employee = new Employee();

employee.department = "Software";
employee.designation = "Software Trainee Developer";
employee.technologiesKnown = "ROR";

console.log(employee.department1);
console.log(employee.designation1);
console.log(employee.technologiesknown);



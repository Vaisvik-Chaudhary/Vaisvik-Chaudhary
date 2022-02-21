
class Person {
 
    constructor(fn,em,cn){
        this._fullName=fn;
        this._email=em;
        this._contactNum=cn;
    }
    display(){
        console.log(this._fullName);
        console.log(this._email);
        console.log(this._contactNum);
    }
  }
  class Employee extends Person{
    static organizationName = 'Bacancy';
    #employeeID;
    #department;
    #designation;
    #technologiesKnown;
    #dateOfJoining;
    #experience;
  
    constructor(emp,dip,des,tec,doj,exp,fn,em,cn){
        super(fn,em,cn);
        this.#employeeID=emp;
        this.#department=dip;
        this.#designation=des;
        this.#technologiesKnown=tec;
        this.#dateOfJoining=doj;
        this.#experience=exp;
    }
  
    get doj(){
        return this.#dateOfJoining;
    }
  
    display(){
        super.display();
        console.log(this.#employeeID);
        console.log(this.#department);
        console.log(this.#designation);
        console.log(this.#technologiesKnown);
        console.log(this.#dateOfJoining);
        console.log(this.#experience);
    }
    
    static sortEmployess(arr){
        arr.sort(function(a,b){
            return (new Date(a.doj)).getTime() - (new Date(b.doj)).getTime();
        })
    }
  }
  let e1 = new Employee(1,"ROR","Trainee","Ruby", new Date('2022 01 05'),'1 month','Vaisvik','vc@gmail',"123456");
  let e2 = new Employee(2,"Java","Trainee2","Java", new Date('2021 07 15'),'6 months','Ronak','rc@gmail',"123456");
  let e3 = new Employee(2,"IOS","Trainee2","IOS", new Date('2021 09 15'),'8 months','Kunal','kc@gmail',"123456");
 console.log(e1.display());
  const arr = [e1,e2,e3];
  
  Employee.sortEmployess(arr)
  for(const i of arr){
    i.display();
    console.log('\n');
  }
    
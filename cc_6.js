//employee class

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return this.name + " works in the " + this.department + " department.";
    }
}

//manager class
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return (
            this.name +
            " manages the " +
            this.department +
            " department with a team of " +
            this.teamSize +
            " employees."
        );
    }
}

//company class
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        for (const employee of this.employees) {
            console.log(employee.describe());
        }
    }
}

//creating employees and managers
let emp1 = new Employee("Alice" , "Accounting");
let emp2 = new Employee("Bob" , "IT");

let mgr1 = new Manager("Carol" , "Sales" , 5);
let mgr2 = new Manager("Dave" , "Engineering" , 12);

//company system
let myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();



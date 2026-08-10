"use strict";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(this.name, this.salary);
    }
}
let e = new Employee("Rahul", 50000);
e.display();

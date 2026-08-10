"use strict";
class Employee1 {
    name = "Mounika";
    salary = 50000;
    department = "CSE";
    display() {
        console.log(this.name, this.salary, this.department);
    }
}
let e1 = new Employee1();
e1.display();

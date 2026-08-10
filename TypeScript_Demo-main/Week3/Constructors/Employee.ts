class Employee {
    constructor(public name: string, public salary: number) {}

    display() {
        console.log(this.name, this.salary);
    }
}

let e = new Employee("Rahul", 50000);
e.display();
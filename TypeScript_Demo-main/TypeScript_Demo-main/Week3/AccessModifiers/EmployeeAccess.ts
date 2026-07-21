class Employee1 {
    public name = "Mounika";
    private salary = 50000;
    protected department = "CSE";

    display() {
        console.log(this.name, this.salary, this.department);
    }
}

let e1 = new Employee1();
e1.display();
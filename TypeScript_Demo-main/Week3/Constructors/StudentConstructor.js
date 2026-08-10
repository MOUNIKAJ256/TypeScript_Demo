"use strict";
class Student1 {
    name;
    marks;
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log(this.name, this.marks);
    }
}
let s2 = new Student1("Mounika", 95);
s2.display();

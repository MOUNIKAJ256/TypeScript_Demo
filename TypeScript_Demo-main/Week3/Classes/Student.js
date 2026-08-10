"use strict";
class Student {
    name = "Mounika";
    rollNo = 101;
    display() {
        console.log(this.name, this.rollNo);
    }
}
let s = new Student();
s.display();

"use strict";
class Person {
    name = "Sai";
    age = 20;
    display() {
        console.log(this.name, this.age);
    }
}
let p1 = new Person();
p1.display();

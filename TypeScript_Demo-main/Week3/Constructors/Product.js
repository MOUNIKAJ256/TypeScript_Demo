"use strict";
class Product {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id, this.name);
    }
}
let p = new Product(101, "Laptop");
p.display();

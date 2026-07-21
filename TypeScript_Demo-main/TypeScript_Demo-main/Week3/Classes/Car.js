"use strict";
class Car {
    brand = "Toyota";
    show() {
        console.log("Brand:", this.brand);
    }
}
let c = new Car();
c.show();

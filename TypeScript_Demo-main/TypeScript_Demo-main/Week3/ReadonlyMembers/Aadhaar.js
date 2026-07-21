"use strict";
class Citizen {
    aadhaar = "1234-5678-9012";
    display() {
        console.log(this.aadhaar);
    }
}
let c1 = new Citizen();
c1.display();

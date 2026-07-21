"use strict";
class Circle {
    static pi = 3.14;
    static area(r) {
        console.log(Circle.pi * r * r);
    }
}
Circle.area(5);

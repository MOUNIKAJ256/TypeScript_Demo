"use strict";
var Geometry;
(function (Geometry) {
    function area(length, breadth) {
        console.log("Area =", length * breadth);
    }
    Geometry.area = area;
})(Geometry || (Geometry = {}));
Geometry.area(10, 20);

"use strict";
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        console.log("Sum =", a + b);
    }
    MathOperations.add = add;
    function subtract(a, b) {
        console.log("Difference =", a - b);
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
MathOperations.add(10, 20);
MathOperations.subtract(20, 10);

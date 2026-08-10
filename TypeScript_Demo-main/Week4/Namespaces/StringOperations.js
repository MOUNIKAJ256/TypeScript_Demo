"use strict";
var StringOperations;
(function (StringOperations) {
    function upper(str) {
        console.log(str.toUpperCase());
    }
    StringOperations.upper = upper;
    function lower(str) {
        console.log(str.toLowerCase());
    }
    StringOperations.lower = lower;
})(StringOperations || (StringOperations = {}));
StringOperations.upper("typescript");
StringOperations.lower("HELLO");

"use strict";
const palindrome = (str) => {
    const rev = str.split("").reverse().join("");
    console.log(str === rev ? "Palindrome" : "Not Palindrome");
};
palindrome("madam");

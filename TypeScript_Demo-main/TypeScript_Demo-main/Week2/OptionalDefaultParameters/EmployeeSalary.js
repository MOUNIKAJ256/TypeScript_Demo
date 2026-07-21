"use strict";
function salary(basic, bonus = 1000) {
    console.log("Salary =", basic + bonus);
}
salary(20000);
salary(20000, 3000);

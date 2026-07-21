"use strict";
class StudentBox {
    data;
    constructor(data) {
        this.data = data;
    }
    show() {
        console.log(this.data);
    }
}
new StudentBox("Mounika").show();

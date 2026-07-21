class Student1 {
    constructor(public name: string, public marks: number) {}

    display() {
        console.log(this.name, this.marks);
    }
}

let s2 = new Student1("Mounika", 95);
s2.display();
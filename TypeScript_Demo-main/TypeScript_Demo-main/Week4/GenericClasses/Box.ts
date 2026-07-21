class Box<T> {
    constructor(public value: T) {}

    display() {
        console.log(this.value);
    }
}

let box = new Box<string>("Hello");
box.display();
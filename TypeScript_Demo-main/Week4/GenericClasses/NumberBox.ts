class NumberBox<T> {
    constructor(public value: T) {}

    print() {
        console.log(this.value);
    }
}

new NumberBox<number>(100).print();
class StudentBox<T> {
    constructor(public data: T) {}

    show() {
        console.log(this.data);
    }
}

new StudentBox<string>("Mounika").show();
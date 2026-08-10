class Book {
    title: string = "Java Programming";

    display(): void {
        console.log(this.title);
    }
}

let b = new Book();
b.display();
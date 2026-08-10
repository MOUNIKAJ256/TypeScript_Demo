class Product {
    constructor(public id: number, public name: string) {}

    display() {
        console.log(this.id, this.name);
    }
}

let p = new Product(101, "Laptop");
p.display();
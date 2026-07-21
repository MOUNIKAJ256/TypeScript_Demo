class Product1 {
    readonly id = 501;

    display() {
        console.log(this.id);
    }
}

let p2 = new Product1();
p2.display();
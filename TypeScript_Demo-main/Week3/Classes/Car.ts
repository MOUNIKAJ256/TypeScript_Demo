class Car {
    brand: string = "Toyota";

    show(): void {
        console.log("Brand:", this.brand);
    }
}

let c = new Car();
c.show();
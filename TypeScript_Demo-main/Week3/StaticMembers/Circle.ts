class Circle {
    static pi = 3.14;

    static area(r: number) {
        console.log(Circle.pi * r * r);
    }
}

Circle.area(5);
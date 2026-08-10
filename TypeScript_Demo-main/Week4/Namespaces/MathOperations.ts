namespace MathOperations {
    export function add(a: number, b: number) {
        console.log("Sum =", a + b);
    }

    export function subtract(a: number, b: number) {
        console.log("Difference =", a - b);
    }
}

MathOperations.add(10, 20);
MathOperations.subtract(20, 10);
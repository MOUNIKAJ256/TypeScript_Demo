function sum(...nums: number[]) {
    console.log(nums.reduce((a, b) => a + b, 0));
}
sum(10, 20, 30);
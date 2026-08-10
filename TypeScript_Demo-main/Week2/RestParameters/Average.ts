function average(...nums: number[]) {
    let total = nums.reduce((a, b) => a + b, 0);
    console.log(total / nums.length);
}
average(10, 20, 30);
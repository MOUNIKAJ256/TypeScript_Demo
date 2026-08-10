function displayLength<T extends { length: number }>(item: T) {
    console.log(item.length);
}

displayLength("TypeScript");
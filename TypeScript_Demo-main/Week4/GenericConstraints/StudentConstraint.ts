interface Student {
    name: string;
}

function displayStudent<T extends Student>(student: T) {
    console.log(student.name);
}

displayStudent({ name: "Mounika" });
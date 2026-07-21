interface PersonInfo {
    age1: number;
}

function displayAge<T extends PersonInfo>(person: T) {
    console.log(person.age1);
}

displayAge({ age1: 20 });
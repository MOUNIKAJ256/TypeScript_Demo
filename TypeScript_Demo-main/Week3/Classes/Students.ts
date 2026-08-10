class Students {
    name: string = "Mounika";
    rollNo: number = 101;

    display(): void {
        console.log(this.name, this.rollNo);
    }
}

let s1 = new Students();
s1.display();
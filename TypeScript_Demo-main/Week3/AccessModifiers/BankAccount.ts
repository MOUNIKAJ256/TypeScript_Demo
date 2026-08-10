class BankAccount {
    public holder = "Mounika";
    private balance = 20000;

    show() {
        console.log(this.holder, this.balance);
    }
}

let b1 = new BankAccount();
b1.show();
class Customer {
  name;
  cpf;
}

class CurrentAccount {
  agency;
  balance;

  withdrawal(money) {
    if (this.balance >= money) {
      this.balance -= money;
    }
  }

  deposit(money) {
    if (money > 0) {
      this.balance += money;
    }
  }
}

const customer1 = new Customer();
customer1.name = "Ricardo";
customer1.cpf = 11122233309;

const customer2 = new Customer();
customer2.name = "Alice";
customer2.cpf = 88822233309;

const currentAccountRicardo = new CurrentAccount();

currentAccountRicardo.balance = 0;
currentAccountRicardo.agency = 1001;

console.log(currentAccountRicardo.balance);

currentAccountRicardo.deposit(100);
currentAccountRicardo.deposit(200);
currentAccountRicardo.deposit(-1);

console.log(currentAccountRicardo.balance);
currentAccountRicardo.withdrawal(200);

console.log(currentAccountRicardo.balance);

console.log(customer1);
console.log(customer2);

//ctrl + alt  changes multiple lines at once

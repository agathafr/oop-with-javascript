class Customer {
  name;
  cpf;
}

class CurrentAccount {
  agency;
  //# https://github.com/tc39/proposal-class-fields#private-fields
  _balance = 0;

  withdrawal(money) {
    if (this._balance >= money) {
      this._balance -= money;
      return money;
    }
  }

  deposit(money) {
    if (money <= 0) return;
    this._balance += money;
  }
}

const customer1 = new Customer();
customer1.name = "Ricardo";
customer1.cpf = 11122233309;

const customer2 = new Customer();
customer2.name = "Alice";
customer2.cpf = 88822233309;

const currentAccountRicardo = new CurrentAccount();
currentAccountRicardo.agency = 1001;

currentAccountRicardo.deposit(100);
currentAccountRicardo.deposit(200);
currentAccountRicardo.deposit(300);

const moneyWithdrawal = currentAccountRicardo.withdrawal(50);
console.log(moneyWithdrawal);

console.log(currentAccountRicardo);

//ctrl + alt  changes multiple lines at once

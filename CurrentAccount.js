import { Customer } from "./Customer.js";
export class CurrentAccount {
  static numberOfAccounts = 0;
  
  set customer(newValue) {
    if(newValue instanceof Customer) {
      this._customer = newValue;
    }
  }

  get customer() {
    return this._customer;
  }

  get balance() {
    return this._balance;
  }

  constructor(agency, customer) {
    this.customer = customer;
    this.agency = agency;
    this._balance = 0;

    CurrentAccount.numberOfAccounts += 1;

  }

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

  transfer(money, targetAccount) {
    if(money < 0 || money > this._balance) {
      return "Insufficient money for transfer";
    } else {
      const withdrawnValue = this.withdrawal(money);
      targetAccount.deposit(withdrawnValue);
    }
  }

}
  //# https://github.com/tc39/proposal-class-fields#private-fields

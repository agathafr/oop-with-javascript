import { Account } from "./Account.js";

export class CurrentAccount extends Account {
  static numberOfAccounts = 0;

  constructor(customer, agency) {
    super(0, customer, agency);
    CurrentAccount.numberOfAccounts += 1;
  }

  // overrides the behavior of withdrawing money from the mother class
  withdrawal(money) {
    let tax = 1.1;
    return this._withdrawal(money, tax);
  }
}
//# https://github.com/tc39/proposal-class-fields#private-fields

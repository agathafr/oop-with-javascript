import { Account } from "./Account.js";

export class CurrentAccount extends Account{
  static numberOfAccounts = 0;
  
  constructor(customer, agency) {
    super(0, customer, agency);
    CurrentAccount.numberOfAccounts += 1;
  }

  withdrawal(money) {
    let tax = 1.1;
    const moneyWithdrawal = tax * money;
    if (this._balance >= moneyWithdrawal) {
      this._balance -= moneyWithdrawal;
      return moneyWithdrawal;
    }
  }
}
  //# https://github.com/tc39/proposal-class-fields#private-fields

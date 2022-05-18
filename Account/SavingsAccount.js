import { Account } from "./Account.js";

export class SavingsAccount extends Account {
  constructor(initialBalance, client, agency) {
    super(initialBalance, client, agency);
  }

  withdrawal(money) {
    const tax = 1.02;
    return this._sacar(money, tax);
  }

  
}

import { Account } from "./Account.js";

export class SalaryAccount extends Account {
  constructor(customer) {
    super(0, customer, 100)
  }

  withdrawal(money){
    const tax = 1.01;
    return this._withdrawal(money, tax);
  }
}

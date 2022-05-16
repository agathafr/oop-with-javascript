import { Account } from "./Account.js";

export class CurrentAccount extends Account{
  static numberOfAccounts = 0;
  
  constructor(customer, agency) {
    super(0, customer, agency);
    CurrentAccount.numberOfAccounts += 1;
  }
}
  //# https://github.com/tc39/proposal-class-fields#private-fields

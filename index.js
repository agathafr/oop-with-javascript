import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";

const customer = new Customer("Alice", 88822233309);

const currentAccountAlice = new CurrentAccount(customer, 1001);

currentAccountAlice.deposit(400);

const savingsAccount = new SavingsAccount(700, customer, 1001);

console.log(savingsAccount);
console.log(currentAccountAlice);

//ctrl + alt  changes multiple lines at once

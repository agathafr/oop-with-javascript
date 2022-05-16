import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { Account } from "./Account.js";

const customer = new Customer("Alice", 88822233309);

const currentAccountAlice = new CurrentAccount(customer, 1001);
const savingsAccount = new SavingsAccount(700, customer, 1001);
const account = new Account(customer, 10);

console.log(account);


//ctrl + alt  changes multiple lines at once

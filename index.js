import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
 
const customer1 = new Customer("Ricardo", 11122233309);

const customer2 = new Customer("Alice", 88822233309);

const currentAccountRicardo = new CurrentAccount(1001, customer1);

const currentAccountAlice = new CurrentAccount(1002, customer2);

currentAccountAlice.deposit(100);
const result = currentAccountAlice.transfer(20, currentAccountRicardo);

console.log(CurrentAccount.numberOfAccounts);

//ctrl + alt  changes multiple lines at once

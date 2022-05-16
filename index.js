import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { SalaryAccount } from "./SalaryAccount.js";

const customer = new Customer("Alice", 88822233309);

const currentAccountAlice = new CurrentAccount(customer, 1001);
const savingsAccount = new SavingsAccount(700, customer, 1001);
const salaryAccount = new SalaryAccount(customer);

salaryAccount.deposit(100);
salaryAccount.withdrawal(10);

console.log(salaryAccount);

//ctrl + alt  changes multiple lines at once

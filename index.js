import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
 
const customer1 = new Customer();
customer1.name = "Ricardo";
customer1.cpf = 11122233309;

const customer2 = new Customer();
customer2.name = "Alice";
customer2.cpf = 88822233309;

const currentAccountRicardo = new CurrentAccount();
currentAccountRicardo.agency = 1001;
currentAccountRicardo.customer = customer1;

const currentAccountAlice = new CurrentAccount();
currentAccountAlice.agency = 1002;
currentAccountAlice.customer = customer2;

currentAccountAlice.deposit(100);
const result = currentAccountAlice.transfer(50, currentAccountRicardo);

console.log(currentAccountAlice.balance);
console.log(currentAccountRicardo.balance);



//ctrl + alt  changes multiple lines at once

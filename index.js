class Customer {
  name;
  cpf;
  agency;
  balance;
}

const customer1 = new Customer();
const customer2 = new Customer();

customer1.name = "Ricardo";
customer1.cpf = 11122233309;
customer1.agency = 1001;
customer1.balance = 0;

customer2.name = "Alice";
customer2.cpf = 88822233309;
customer2.agency = 1001;
customer2.balance = 0;

console.log(customer1, customer2);

//ctrl + alt  changes multiple lines at once
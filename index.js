import { Customer } from "./Customer.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Manager("Rodrigo", 10000, 12345678900);
director.registerPassword("123456")

const manager = new Manager("Ricardo", 5000, 12345678901);
manager.registerPassword("123")

const customer = new Customer("Lais", 78945612379, "456")

const directorIsLoggedIn = AuthenticationSystem.login(director, "123456");
const managerIsLoggedIn = AuthenticationSystem.login(manager, "123");
const customerIsLoggedIn = AuthenticationSystem.login(customer, "456");

console.log(directorIsLoggedIn, managerIsLoggedIn, customerIsLoggedIn);

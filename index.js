import { Customer } from "./Customer.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Manager("Rodrigo", 10000, 12345678900);
director.registerPassword("123456789")

const manager = new Manager("Ricardo", 5000, 12345678901);
manager.registerPassword("123456")

const areLoggedIn = AuthenticationSystem.login(manager, "123456");

console.log(areLoggedIn);

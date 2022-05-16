export class Account {
  constructor(initialBalance, client, agency) {
    if(this.constructor == Account) {
      throw new Error("You should not instantiate an account-type object directly because this is an abstract class!");
    }

    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }

  set customer(newValue) {
    if (newValue instanceof Customer) {
      this._customer = newValue;
    }
  }

  get customer() {
    return this._customer;
  }

  get balance() {
    return this._balance;
  }

  //abstract method
  withdrawal(money) {
    throw new Error("The withdraw from account method is abstract! It is necessary to overwrite, put a specific implementation in the child class call.");
  }

  _withdrawal(money, tax) {
    const moneyWithdrawal = tax * money;
    if (this._balance >= moneyWithdrawal) {
      this._balance -= moneyWithdrawal;
      return moneyWithdrawal;
    }

    return 0;
  }

  deposit(money) {
    if (money <= 0) return;
    this._balance += money;
  }

  transfer(money, targetAccount) {
    if (money < 0 || money > this._balance) {
      return "Insufficient money for transfer";
    } else {
      const withdrawnValue = this.withdrawal(money);
      targetAccount.deposit(withdrawnValue);
    }
  }
}

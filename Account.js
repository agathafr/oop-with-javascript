export class Account {
  constructor(initialBalance, client, agency) {
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

  withdrawal(money) {
    let tax = 1;
    return this._withdrawal(money, tax);
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

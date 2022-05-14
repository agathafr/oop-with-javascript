export class CurrentAccount {
  agency;
  //# https://github.com/tc39/proposal-class-fields#private-fields
  _balance = 0;

  withdrawal(money) {
    if (this._balance >= money) {
      this._balance -= money;
      return money;
    }
  }

  deposit(money) {
    if (money <= 0) return;
    this._balance += money;
  }
}
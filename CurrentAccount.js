export class CurrentAccount {
  agency;
  customer;
  
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

  transfer(money, targetAccount) {
    if(money < 0 || money > this._balance) {
      return "Insufficient money for transfer";
    } else {
      this._balance -= money;
      targetAccount._balance += money;
    }
  }

}
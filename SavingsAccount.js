export class SavingsAccount {
  constructor(initialBalance, client, agency) {
    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }
}
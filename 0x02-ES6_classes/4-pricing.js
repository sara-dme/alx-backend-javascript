import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  get currency() {return this._currency; }

  set amount(value) { this._amount = value; }
  set currency(value) { this._currency = value; }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = value;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, exchangeRate) {
        if (typeof exchangeRate !== 'number') {
            throw new TypeError('Exchange rate must be a number');
        }
        const convertedAmount = amount * exchangeRate;
        return convertedAmount;
    }
}
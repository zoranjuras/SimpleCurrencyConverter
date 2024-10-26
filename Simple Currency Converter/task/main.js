const input = require('sync-input');

const exchangeRates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

function converter() {

    console.log("What do you want to convert?");

    let startCurrency = input("From: ").toUpperCase();

    if (!exchangeRates[startCurrency]) {
        console.log("Unknown currency");
        return;
    }

    let endCurrency = input("To: ").toUpperCase();

    if (!exchangeRates[endCurrency]) {
        console.log("Unknown currency");
        return;
    }

    let amount = Number(input("Amount: "));

    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
    } else {
        let result = amount / exchangeRates[startCurrency] * exchangeRates[endCurrency];
        console.log(`Result: ${amount} ${startCurrency} equals ${result.toFixed(4)} ${endCurrency}`);
    }
}

console.log("Welcome to Currency Converter!");
for (let currency in exchangeRates) {
    console.log(`1 USD equals ${exchangeRates[currency]} ${currency}`);
}

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let choice = input();
    if (choice === "2") {
        console.log("Have a nice day!");
        return;
    } else if (choice === "1") {
        converter();
    } else {
        console.log("Unknown input");
    }
}

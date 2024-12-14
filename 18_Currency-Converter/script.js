const amountElement = document.querySelector(".amount");
const convertedAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");
const container = document.querySelector(".container");

// Array to populate the select tags with these countries
const countries = [
    { code: "AED", name: "United Arab Emirates" },
    { code: "ARS", name: "Argentina Peso" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "BRL", name: "Brazilian Reals" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "RON", name: "Romanian Leu" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "TWD", name: "Taiwan New Dollar" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "USD", name: "United States Dollar" },
    { code: "UYU", name: "Uruguayan Peso" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "ZAR", name: "South African Rand" },
];

// Populate select elements with country options
countries.forEach(country => {
    const option1 = document.createElement("option");
    option1.value = country.code;
    option1.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(option2);
});

// Set default values
fromCurrencyElement.value = "USD";
toCurrencyElement.value = "INR";

const getExchangeRate = async () => {
    const amount = parseFloat(amountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please enter a valid amount.";
        convertedAmountElement.value = "";
        return;
    }

    resultElement.textContent = "Fetching exchange rates...";

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates.");
        }

        const data = await response.json();
        const conversionRate = data.rates[toCurrency];

        if (!conversionRate) {
            resultElement.textContent = "Exchange rate not available for the selected currencies.";
            convertedAmountElement.value = "";
            return;
        }

        const convertedAmount = (amount * conversionRate).toFixed(2);
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        
    } catch (error) {
        container.innerHTML = `<h1>Error while fetching exchange rates!</h1>`;
    }
};

// Event listeners
amountElement.addEventListener("input", getExchangeRate);
fromCurrencyElement.addEventListener("change", getExchangeRate);
toCurrencyElement.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);

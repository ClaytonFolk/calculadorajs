function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
        document.getElementById('currencyResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const convertedAmount = amount / rate;
    document.getElementById('currencyResult').textContent =
        `Valor Convertido: ${convertedAmount.toFixed(2)} USD`;
}
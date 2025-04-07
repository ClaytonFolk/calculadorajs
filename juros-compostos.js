function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById('compoundResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;

    document.getElementById('compoundResult').textContent =
        `Montante Final: R$ ${amount.toFixed(2)} (Juros: R$ ${interest.toFixed(2)})`;
}
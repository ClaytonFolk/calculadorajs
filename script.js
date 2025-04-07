
function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('imcResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = weight / (height * height);
    let resultText = `Seu IMC é: ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultText += 'Você está abaixo do peso.';
    } else if (imc < 24.9) {
        resultText += 'Você está no peso ideal.';
    } else if (imc < 29.9) {
        resultText += 'Você está com sobrepeso.';
    } else {
        resultText += 'Você está com obesidade.';
    }

    document.getElementById('imcResult').textContent = resultText;
}


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
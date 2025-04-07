function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('imcResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = weight / (height * height);
    let resultText = `Seu IMC é: ${imc.toFixed(2)}. `;

    if (imc < 18.5) resultText += 'Você está abaixo do peso.';
    else if (imc < 24.9) resultText += 'Você está no peso ideal.';
    else if (imc < 29.9) resultText += 'Você está com sobrepeso.';
    else resultText += 'Você está com obesidade.';

    document.getElementById('imcResult').textContent = resultText;
}
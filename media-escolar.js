function calculateAverage() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('averageResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const average = (nota1 + nota2 + nota3) / 3;
    document.getElementById('averageResult').textContent = `Sua média é: ${average.toFixed(2)}`;
}
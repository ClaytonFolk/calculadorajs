function calculateSpeed() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
        document.getElementById('speedResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const speed = distance / time;
    document.getElementById('speedResult').textContent = `Velocidade Média: ${speed.toFixed(2)} km/h`;
}
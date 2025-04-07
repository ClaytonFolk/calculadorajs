function calculateDiscount() {
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
        document.getElementById('discountResult').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const discountedPrice = price - (price * (discount / 100));
    document.getElementById('discountResult').textContent =
        `Preço com Desconto: R$ ${discountedPrice.toFixed(2)}`;
}
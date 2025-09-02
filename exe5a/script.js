function calculateTotal() {
    const chocolatePrice = 900;
    const vanillaPrice = 800;
    const pinkVelvetPrice = 1000;
    const dutePrice = 1500;
    const chocolateQty = parseInt(document.getElementById('chocolateQuantity').value) || 0;
     const vanillaQty = parseInt(document.getElementById('vanillaQuantity').value) || 0;
    const pinkVelvetQty = parseInt(document.getElementById('pinkVelvetQuantity').value) || 0;
    const duteQty = parseInt(document.getElementById('duteQuantity').value) || 0;

    const total = (chocolateQty * chocolatePrice) +
                  (vanillaQty * vanillaPrice) +
                  (pinkVelvetQty * pinkVelvetPrice) +
                  (duteQty * dutePrice);
            document.getElementById('totalPrice').textContent = total;
}
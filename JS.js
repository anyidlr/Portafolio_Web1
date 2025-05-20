function calcular() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const Porciento = parseFloat(document.getElementById("Porcentaje").value);
    
    if (isNaN(subtotal) || isNaN(Porciento)) {
        alert("Por favor, introduce valores válidos.");
        return;
    }

    const monto = (subtotal * Porciento) / 100;
    const montoconprop = subtotal + monto;

    document.getElementById("resultado").innerHTML = 
        `<p>Propina: $${monto.toFixed(2)}</p>
         <p>Total a pagar con propina: $${montoconprop.toFixed(2)}</p>`;
}
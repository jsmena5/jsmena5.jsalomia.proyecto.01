
// Mapa/diccionario Tasas de cambio predefinidas
const exchangeRates = {
    USD: { RUB: 99.9809, EUR: 0.946224, ARS: 1013.73, COP: 4402.05, BRL: 6.08938, CRC: 505.519, UYU: 43.5153 }
};

// Elementos del DOM
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultDisplay = document.getElementById('result');
const borrarContenido=document.getElementById('borrar');

// Función para realizar la conversión
function convertCurrency() {
    //Obtiene el valor ingresado por el usuario en el campo de entrada (campo con id="amount").
    const amount = amountInput.value;
    //Obtiene la moneda seleccionada en el menú desplegable para la moneda de origen (fromCurrency).
    const fromCurrency = fromCurrencySelect.value;
    //Obtiene la moneda seleccionada en el menú desplegable para la moneda de destino (toCurrency).
    const toCurrency = toCurrencySelect.value;

    //Verificar cantidad valida
    // Verificar si no es un número o si es menor o igual a 0
    if (isNaN(amount) || amount <= -1) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(5);

    resultDisplay.innerHTML = `
  <br> ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency} <br>
  1 ${fromCurrency} = ${rate} ${toCurrency}
`;
}

//Borrar conversion
borrarContenido.addEventListener('click',function(){
    //reiniciar el campo de cantidad a 0
    amountInput.value='';
    //limpiar el resultado
    resultDisplay.innerHTML='';

    //Reiniciar las selecciones de monedas
    fromCurrencySelect.value='USD';
    toCurrencySelect.value='RUB';
})

// Agregar eventos para actualizar automáticamente
amountInput.addEventListener('input', convertCurrency);
fromCurrencySelect.addEventListener('change', convertCurrency);
toCurrencySelect.addEventListener('change', convertCurrency);
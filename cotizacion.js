//Cotizador de dolar oficial a peso argentino y de peso argentino a dolar oficial

let cotizacionDolar = 350; // Puedes cambiar esto por la cotización actual

// Bucle para realizar múltiples conversiones
let continuar = true;

while (continuar) { 
    let cantidad;
    let tipoMoneda;

    // Solicitar la cantidad y asegurarse de que sea un número válido
    while (true) {
        let cantidadInput = prompt("Ingrese la cantidad de moneda:");
        cantidad = parseInt(cantidadInput);

        if (!isNaN(cantidad) && cantidad > 0) {
            break; // Salir del bucle si se ingresa un número válido
        } else {
            alert("Por favor, ingrese una cantidad válida.");
        }
    }

    // Solicitar el tipo de moneda
    while (true) {
        tipoMoneda = prompt("¿Qué tipo de moneda está ingresando (dolares o pesos)?");

        if (tipoMoneda == "dolares" || tipoMoneda == "pesos") {
            break; // Salir del bucle si se ingresa un tipo de moneda válido
        } else {
            alert("Por favor, especifique el tipo de moneda (dolares o pesos).");
        }
    }

    // Realizar la conversión según el tipo de moneda
    if (tipoMoneda === "dolares") {
        let resultado = cantidad * cotizacionDolar;
        alert(cantidad + " dolares equivalen a " + resultado + " pesos.");
    } else {
        let resultado = cantidad / cotizacionDolar;
        alert(cantidad + " pesos equivalen a " + resultado + " dolares.");
    }

    // Preguntar al usuario si desea realizar otra conversión
    let respuesta = prompt("¿Desea realizar otra conversión? (Si/No)");
    continuar = (respuesta === "si" || respuesta === "Si");
}

alert("Gracias por utilizar el cotizador de moneda. ¡Hasta luego!");

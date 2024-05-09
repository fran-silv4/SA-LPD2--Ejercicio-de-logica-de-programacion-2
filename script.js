let celcius;

while (true) {
    celcius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    if (!isNaN(celcius)) {
        break;
    } else {
        alert("¡Error! Por favor, ingresa un número válido.");
    }
}

console.log("Convirtiendo a Fahrenheit y Kelvin...");

let convierteTemperatura = function(celcius) {
    let fahrenheit = (celcius * 1.8) + 32;
    let kelvin = celcius + 273.15;

    return {
        fahrenheit: fahrenheit,
        kelvin: kelvin
    };
};

let resultado = convierteTemperatura(celcius);

console.log("Aquí tienes tus grados Celsius en Fahrenheit:", resultado.fahrenheit);
console.log("Aquí tienes tus grados Celsius en Kelvin:", resultado.kelvin);
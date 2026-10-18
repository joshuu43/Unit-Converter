function convertLength() { 

}

function convertWeight() {

}

function convertTemperature() {
    if (event) event.preventDefault();

    const temperature = Number(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    //Celsius
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        const result = (temperature * 9/5) + 32;
        document.getElementById('result').innerText = `result: ${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        const result = temperature + 273.15;
        document.getElementById('result').innerText = `${temperature}°C is equal to ${result.toFixed(2)}K`;
    }

    //Fahrenheit
    if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        const result = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = `result: ${temperature}°F is equal to ${result.toFixed(2)}°C`;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        const result = (temperature - 32) * 5/9 + 273.15;
        document.getElementById('result').innerText = `result: ${temperature}°F is equal to ${result.toFixed(2)}K`;
    }

    //Kelvin
    if (fromUnit === "kelvin" && toUnit === "celsius") {
        const result = temperature - 273.15;
        document.getElementById('result').innerText = `result: ${temperature}K is equal to ${result.toFixed(2)}°C`;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        const result = (temperature - 273.15) * 9/5 + 32;
        document.getElementById('result').innerText = `result: ${temperature}K is equal to ${result.toFixed(2)}°F`;
    }
}
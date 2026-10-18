function convertLength() {
    if (event) event.preventDefault();

}

function convertWeight() {
    if (event) event.preventDefault();

    const weight = Number(document.getElementById('weight').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');

    //Check if the fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
        resultElement.innerText = `result: ${weight} ${fromUnit} is equal to ${weight} ${toUnit}`;
        return;
    }

    //milligram
    if (fromUnit === "milligram") {
        if (toUnit === "gram") {
            const result = weight / 1000;
            resultElement.innerText = `result: ${weight} mg is equal to ${result.toFixed(3)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 1000000;
            resultElement.innerText = `result: ${weight} mg is equal to ${result.toFixed(6)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight / 28349.5;
            resultElement.innerText = `result: ${weight} mg is equal to ${result.toFixed(5)} oz`;
        } else if (toUnit === "pound") {
            const result = weight / 453592.4;
            resultElement.innerText = `result: ${weight} mg is equal to ${result.toFixed(7)} lb`;
        }
    }

    //gram
    else if (fromUnit === "gram") {
        if (toUnit === "milligram") {
            const result = weight * 1000;
            resultElement.innerText = `result: ${weight} g is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "kilogram") {
            const result = weight / 1000;
            resultElement.innerText = `result: ${weight} g is equal to ${result.toFixed(3)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight / 28.35;
            resultElement.innerText = `result: ${weight} g is equal to ${result.toFixed(4)} oz`;
        } else if (toUnit === "pound") {
            const result = weight / 453.59;
            resultElement.innerText = `result: ${weight} g is equal to ${result.toFixed(5)} lb`;
        }
    }

    //kilogram
    else if (fromUnit === "kilogram") {
        if (toUnit === "milligram") {
            const result = weight * 1000000;
            resultElement.innerText = `result: ${weight} kg is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 1000;
            resultElement.innerText = `result: ${weight} kg is equal to ${result.toFixed(0)} g`;
        } else if (toUnit === "ounce") {
            const result = weight * 35.274;
            resultElement.innerText = `result: ${weight} kg is equal to ${result.toFixed(2)} oz`;
        } else if (toUnit === "pound") {
            const result = weight * 2.20462;
            resultElement.innerText = `result: ${weight} kg is equal to ${result.toFixed(2)} lb`;
        }
    }

    //ounce
    else if (fromUnit === "ounce") {
        if (toUnit === "milligram") {
            const result = weight * 28349.5;
            resultElement.innerText = `result: ${weight} oz is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 28.35;
            resultElement.innerText = `result: ${weight} oz is equal to ${result.toFixed(2)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 35.274;
            resultElement.innerText = `result: ${weight} oz is equal to ${result.toFixed(4)} kg`;
        } else if (toUnit === "pound") {
            const result = weight / 16;
            resultElement.innerText = `result: ${weight} oz is equal to ${result.toFixed(4)} lb`;
        }
    }

    //pound
    else if (fromUnit === "pound") {
        if (toUnit === "milligram") {
            const result = weight * 453592.4;
            resultElement.innerText = `result: ${weight} lb is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 453.59;
            resultElement.innerText = `result: ${weight} lb is equal to ${result.toFixed(2)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 2.20462;
            resultElement.innerText = `result: ${weight} lb is equal to ${result.toFixed(4)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight * 16;
            resultElement.innerText = `result: ${weight} lb is equal to ${result.toFixed(2)} oz`;
        }
    }
}

function convertTemperature() {
    if (event) event.preventDefault();

    const temperature = Number(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    //Check if the fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
        if (fromUnit === "celsius") {
            document.getElementById('result').innerText = `result: ${temperature}°C is equal to ${temperature}°C`;
            return;
        }
        else if (fromUnit === "fahrenheit") {
            document.getElementById('result').innerText = `result: ${temperature}°F is equal to ${temperature}°F`;
            return;
        }
        else if (fromUnit === "kelvin") {
            document.getElementById('result').innerText = `result: ${temperature}K is equal to ${temperature}K`;
            return;
        }
    }

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
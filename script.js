function convertLength() {
    if (event) event.preventDefault();

    const length = Number(document.getElementById('length').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    //Check if the fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
        document.getElementById('result').innerText = `result: ${length} ${fromUnit} is equal to ${length} ${toUnit}`;
        return;
    }

    //millimeter
    if (fromUnit === "millimeter") {
        if (toUnit === "centimeter") {
            const result = length / 10;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(2)} cm`;
        } else if (toUnit === "meter") {
            const result = length / 1000;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(3)} m`;
        } else if (toUnit === "kilometer") {
            const result = length / 1000000;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(6)} km`;
        } else if (toUnit === "inch") {
            const result = length / 25.4;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "foot") {
            const result = length / 304.8;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "yard") {
            const result = length / 914.4;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 1609344;
            document.getElementById('result').innerText = `result: ${length} mm is equal to ${result.toFixed(7)} mi`;
        }

    }

    //centimeter
    else if (fromUnit === "centimeter") {
        if (toUnit === "millimeter") {
            const result = length * 10;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(0)} mm`;
        } else if (toUnit === "meter") {
            const result = length / 100;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(2)} m`;
        } else if (toUnit === "kilometer") {
            const result = length / 100000;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(5)} km`;
        } else if (toUnit === "inch") {
            const result = length / 2.54;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "foot") {
            const result = length / 30.48;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "yard") {
            const result = length / 91.44;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 160934.4;
            document.getElementById('result').innerText = `result: ${length} cm is equal to ${result.toFixed(6)} mi`;
        }
    }

    //meter
    else if (fromUnit === "meter") {
        if (toUnit === "millimeter") {
            const result = length * 1000;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(0)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 100;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(0)} cm`;
        } else if (toUnit === "kilometer") {
            const result = length / 1000;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(3)} km`;
        } else if (toUnit === "inch") {
            const result = length * 39.3701;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "foot") {
            const result = length * 3.28084;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "yard") {
            const result = length * 1.09361;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 1609.344;
            document.getElementById('result').innerText = `result: ${length} m is equal to ${result.toFixed(6)} mi`;
        }
    }

    //kilometer
    else if (fromUnit === "kilometer") {
        if (toUnit === "millimeter") {
            const result = length * 1000000;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(0)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 100000;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(0)} cm`;
        } else if (toUnit === "meter") {
            const result = length * 1000;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(0)} m`;
        } else if (toUnit === "inch") {
            const result = length * 39370.1;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "foot") {
            const result = length * 3280.84;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "yard") {
            const result = length * 1093.61;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 1.609344;
            document.getElementById('result').innerText = `result: ${length} km is equal to ${result.toFixed(6)} mi`;
        }
    }

    //inch
    else if (fromUnit === "inch") {
        if (toUnit === "millimeter") {
            const result = length * 25.4;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(4)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 2.54;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(4)} cm`;
        } else if (toUnit === "meter") {
            const result = length / 39.3701;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(4)} m`;
        } else if (toUnit === "kilometer") {
            const result = length / 39370.1;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(6)} km`;
        } else if (toUnit === "foot") {
            const result = length / 12;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "yard") {
            const result = length / 36;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 63360;
            document.getElementById('result').innerText = `result: ${length} in is equal to ${result.toFixed(6)} mi`;
        }
    }

    //foot
    else if (fromUnit === "foot") {
        if (toUnit === "millimeter") {
            const result = length * 304.8;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(4)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 30.48;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(4)} cm`;
        } else if (toUnit === "meter") {
            const result = length / 3.28084;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(4)} m`;
        } else if (toUnit === "kilometer") {
            const result = length / 3280.84;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(6)} km`;
        } else if (toUnit === "inch") {
            const result = length * 12;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "yard") {
            const result = length / 3;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(4)} yd`;
        } else if (toUnit === "mile") {
            const result = length / 5280;
            document.getElementById('result').innerText = `result: ${length} ft is equal to ${result.toFixed(6)} mi`;
        }
    }

    //yard
    else if (fromUnit === "yard") {
        if (toUnit === "millimeter") {
            const result = length * 914.4;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(4)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 91.44;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(4)} cm`;
        } else if (toUnit === "meter") {
            const result = length / 1.09361;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(4)} m`;
        } else if (toUnit === "kilometer") {
            const result = length / 1093.61;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(6)} km`;
        } else if (toUnit === "inch") {
            const result = length * 36;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(4)} in`;
        } else if (toUnit === "foot") {
            const result = length * 3;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(4)} ft`;
        } else if (toUnit === "mile") {
            const result = length / 1760;
            document.getElementById('result').innerText = `result: ${length} yd is equal to ${result.toFixed(6)} mi`;
        }
    }

    //mile
    else if (fromUnit === "mile") {
        if (toUnit === "millimeter") {
            const result = length * 1609344;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(0)} mm`;
        } else if (toUnit === "centimeter") {
            const result = length * 160934.4;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(1)} cm`;
        } else if (toUnit === "meter") {
            const result = length * 1609.34;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(2)} m`;
        } else if (toUnit === "kilometer") {
            const result = length * 1.60934;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(2)} km`;
        } else if (toUnit === "inch") {
            const result = length * 63360;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(0)} in`;
        } else if (toUnit === "foot") {
            const result = length * 5280;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(0)} ft`;
        } else if (toUnit === "yard") {
            const result = length * 1760;
            document.getElementById('result').innerText = `result: ${length} mi is equal to ${result.toFixed(0)} yd`;
        }
    }
}

function convertWeight() {
    if (event) event.preventDefault();

    const weight = Number(document.getElementById('weight').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    //Check if the fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
        document.getElementById('result').innerText = `result: ${weight} ${fromUnit} is equal to ${weight} ${toUnit}`;
        return;
    }

    //milligram
    if (fromUnit === "milligram") {
        if (toUnit === "gram") {
            const result = weight / 1000;
            document.getElementById('result').innerText = `result: ${weight} mg is equal to ${result.toFixed(3)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 1000000;
            document.getElementById('result').innerText = `result: ${weight} mg is equal to ${result.toFixed(6)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight / 28349.5;
            document.getElementById('result').innerText = `result: ${weight} mg is equal to ${result.toFixed(5)} oz`;
        } else if (toUnit === "pound") {
            const result = weight / 453592.4;
            document.getElementById('result').innerText = `result: ${weight} mg is equal to ${result.toFixed(7)} lb`;
        }
    }

    //gram
    else if (fromUnit === "gram") {
        if (toUnit === "milligram") {
            const result = weight * 1000;
            document.getElementById('result').innerText = `result: ${weight} g is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "kilogram") {
            const result = weight / 1000;
            document.getElementById('result').innerText = `result: ${weight} g is equal to ${result.toFixed(3)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight / 28.35;
            document.getElementById('result').innerText = `result: ${weight} g is equal to ${result.toFixed(4)} oz`;
        } else if (toUnit === "pound") {
            const result = weight / 453.59;
            document.getElementById('result').innerText = `result: ${weight} g is equal to ${result.toFixed(5)} lb`;
        }
    }

    //kilogram
    else if (fromUnit === "kilogram") {
        if (toUnit === "milligram") {
            const result = weight * 1000000;
            document.getElementById('result').innerText = `result: ${weight} kg is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 1000;
            document.getElementById('result').innerText = `result: ${weight} kg is equal to ${result.toFixed(0)} g`;
        } else if (toUnit === "ounce") {
            const result = weight * 35.274;
            document.getElementById('result').innerText = `result: ${weight} kg is equal to ${result.toFixed(2)} oz`;
        } else if (toUnit === "pound") {
            const result = weight * 2.20462;
            document.getElementById('result').innerText = `result: ${weight} kg is equal to ${result.toFixed(2)} lb`;
        }
    }

    //ounce
    else if (fromUnit === "ounce") {
        if (toUnit === "milligram") {
            const result = weight * 28349.5;
            document.getElementById('result').innerText = `result: ${weight} oz is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 28.35;
            document.getElementById('result').innerText = `result: ${weight} oz is equal to ${result.toFixed(2)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 35.274;
            document.getElementById('result').innerText = `result: ${weight} oz is equal to ${result.toFixed(4)} kg`;
        } else if (toUnit === "pound") {
            const result = weight / 16;
            document.getElementById('result').innerText = `result: ${weight} oz is equal to ${result.toFixed(4)} lb`;
        }
    }

    //pound
    else if (fromUnit === "pound") {
        if (toUnit === "milligram") {
            const result = weight * 453592.4;
            document.getElementById('result').innerText = `result: ${weight} lb is equal to ${result.toFixed(0)} mg`;
        } else if (toUnit === "gram") {
            const result = weight * 453.59;
            document.getElementById('result').innerText = `result: ${weight} lb is equal to ${result.toFixed(2)} g`;
        } else if (toUnit === "kilogram") {
            const result = weight / 2.20462;
            document.getElementById('result').innerText = `result: ${weight} lb is equal to ${result.toFixed(4)} kg`;
        } else if (toUnit === "ounce") {
            const result = weight * 16;
            document.getElementById('result').innerText = `result: ${weight} lb is equal to ${result.toFixed(2)} oz`;
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
        document.getElementById('result').innerText = `result: ${temperature}°C is equal to ${result.toFixed(2)}K`;
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
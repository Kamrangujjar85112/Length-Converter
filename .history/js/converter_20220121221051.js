const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers');
const inputMToCm = document.getElementById('metersToCentimeters');
const inputCmToKm = document.getElementById('centimetersToKilometers');
const inputKmToM = document.getElementById('kilometersToMeters');
const inputMiToM = document.getElementById('milesToMeters');
const inputFValue = document.getElementById('firstValue');
const inputSValue = document.getElementById('secondValue');
const p = document.getElementById('percent');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');



// // Converter
// centimeters To kilometers
convert.addEventListener('click', function converter(){
    const Km2 = inputCmToKm?.value / 100000;
    document.getElementById('cmToKm').innerHTML = inputCmToKm?.value +' Centimeters are equal to ' +Km2 + ' Kilometers';

// centimeters To Milimeters
    const Mm = inputCmToMm?.value * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm?.value +' Centimeters are equal to ' +Mm + ' Milimeters';

// Miles to kilometers
    const Km1 = inputMiToKm?.value * 1.609; 
    document.getElementById('miToKm').innerHTML = inputMiToKm?.value +' Miles are equal to ' +Km1 + ' Kilometers';

// Meters to Centimeters
    const Cm1 = inputMToCm?.value * 100;
    document.getElementById('mToCm').innerHTML = inputMToCm?.value +' Meters are equal to ' +Cm1 + ' Centimeters';

// kilometers To meters
    const M1 = inputKmToM?.value * 1000;
    document.getElementById('kmToM').innerHTML = inputKmToM?.value +' Kilometers are equal to ' +M1 + ' Meters';

// Miles To meters
    const M2 = inputMiToM?.value * 1609;
    document.getElementById('miToM').innerHTML = inputMiToM?.value +' Miles are equal to ' +M2 + ' Meters';

// percentage
    const fValue = inputFValue?.value;
    const sValue = inputSValue?.value;
    const p = fValue * 100 / sValue;
    document.getElementById('percent').innerHTML = 'The Percentage of ' + fValue +' in ' +sValue + ' is ' + p ; 
});

// // reset
// centimeters To Milimeters
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
});
// Miles to kilometers
reset.addEventListener('click', function reset(){
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
});
// Meters to Centimeters
reset.addEventListener('click', function reset(){
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
});
// centimeters To kilometers
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToKilometers').value = "";
    document.getElementById('cmToKm').innerHTML = "";
});
// kilometers To meters
reset.addEventListener('click', function reset(){
    document.getElementById('kilometersToMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
});
// Miles To meters
reset.addEventListener('click', function reset(){
    document.getElementById('milesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
});
// percentage
reset.addEventListener('click', function reset(){
    document.getElementById('firstValue').value = "";
    document.getElementById('secondValue').value = "";
    document.getElementById('percent').innerHTML = "";
});
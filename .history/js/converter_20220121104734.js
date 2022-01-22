const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers');
const inputMToCm = document.getElementById('metersToCentimeters');
const inputCmToKm = document.getElementById('centimetersToKilometers');
const inputKmToM = document.getElementById('kilometersToMeters');
const inputMiToM = document.getElementById('milesToMeters');
const inputFValue = document.getElementById('firstValue');
const inputSValue = document.getElementById('secondValue');
const inputSValue = document.getElementById('percent');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');



// // Converter
// centimeters To Milimeters
convert.addEventListener('click', function converter(){
    const Mm = inputCmToMm.value * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm.value +' Centimeters are equal to ' +Mm + ' Milimeters';
});   
// Miles to kilometers
convert.addEventListener('click', function converter(){
    const Km1 = inputMiToKm.value * 1.609; 
    document.getElementById('miToKm').innerHTML = inputMiToKm.value +' Miles are equal to ' +Km1 + ' Kilometers';
});   
// Meters to Centimeters
convert.addEventListener('click', function converter(){
    const Cm1 = inputMToCm.value * 100;
    document.getElementById('mToCm').innerHTML = inputMToCm.value +' Meters are equal to ' +Cm1 + ' Centimeters';
});   
// centimeters To kilometers
convert.addEventListener('click', function converter(){
    const Km2 = inputCmToKm.value / 100000;
    document.getElementById('cmToKm').innerHTML = inputCmToKm.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
});   
// kilometers To meters
convert.addEventListener('click', function converter(){
    const M1 = inputKmToM.value * 1000;
    document.getElementById('kmToM').innerHTML = inputKmToM.value +' Kilometers are equal to ' +M1 + ' Meters';
});
// Miles To meters
convert.addEventListener('click', function converter(){
    const M2 = inputMiToM.value * 1609;
    document.getElementById('miToM').innerHTML = inputMiToM.value +' Miles are equal to ' +M2 + ' Meters';
});   
// percentage
convert.addEventListener('click', function converter(){
    const fValue = inputFValue.value;
    const sValue = 100 / inputSValue.value;
    const p = fValue * sValue;
    document.getElementById('percent').innerHTML = 'The Percentage of ' + fValue +' is ' + p ; 
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
    document.getElementById('').value = "";
    document.getElementById('percent').innerHTML = "";
});
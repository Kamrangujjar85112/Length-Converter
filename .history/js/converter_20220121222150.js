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

if(inputCmToKm?.value){
    const Km2 = inputCmToKm?.value / 100000;
    document.getElementById('cmToKm').innerHTML = inputCmToKm?.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
}    
// centimeters To Milimeters
if(inputCmToMm?.value){
    const Mm = inputCmToMm?.value * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm?.value +' Centimeters are equal to ' +Mm + ' Milimeters';
}
// Miles to kilometers
if(inputMiToKm?.value){
    const Km1 = inputMiToKm?.value * 1.609; 
    document.getElementById('miToKm').innerHTML = inputMiToKm?.value +' Miles are equal to ' +Km1 + ' Kilometers';
}
// Meters to Centimeters
if(inputMToCm?.value){
    const Cm1 = inputMToCm?.value * 100;
    document.getElementById('mToCm').innerHTML = inputMToCm?.value +' Meters are equal to ' +Cm1 + ' Centimeters';
}
// kilometers To meters
if(inputKmToM?.value){
    const M1 = inputKmToM?.value * 1000;
    document.getElementById('kmToM').innerHTML = inputKmToM?.value +' Kilometers are equal to ' +M1 + ' Meters';
}
// Miles To meters
if(inputMiToM?.value){
    const M2 = inputMiToM?.value * 1609;
    document.getElementById('miToM').innerHTML = inputMiToM?.value +' Miles are equal to ' +M2 + ' Meters';
}
// percentage
if(inputFValue?.value || inputSValue?.value){
    const fValue = inputFValue?.value;
    const sValue = inputSValue?.value;
    const p = fValue * 100 / sValue;
    document.getElementById('percent').innerHTML = 'The Percentage of ' + fValue +' in ' +sValue + ' is ' + p ; 
}
});

// // reset

reset.addEventListener('click', function reset(){

// centimeters To kilometers
if(inputCmToKm?.value){
document.getElementById('centimetersToKilometers').value = "";
document.getElementById('cmToKm').innerHTML = "";
}
// centimeters To Milimeters
if(inputCmToMm?.value){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
}
// Miles to kilometers
if(inputMiToKm?.value){
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
}
// Meters to Centimeters
if(inputMToCm?.value){
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
}
// kilometers To meters
if(inputKmToM?.value){
    document.getElementById('kilometersToMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
}
// Miles To Meters
if(inputMiToM?.value){
    document.getElementById('milesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
}
// percentage
if(inputFValue?.value || inputSValue?.value){
    document.getElementById('firstValue').value = "";
    document.getElementById('secondValue').value = "";
    document.getElementById('percent').innerHTML = "";
});
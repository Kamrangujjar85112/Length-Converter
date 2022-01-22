const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers');
const inputMToCm = document.getElementById('metersToCentimeters');
const inputCmToKm = document.getElementById('centimetersToKilometers');
const inputKmToM = document.getElementById('kilometersTOMeters');
const inputMiToM = document.getElementById('milesToMeters');
const inputValue = document.getElementById('percentage');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');


convert.addEventListener('click', function converter(){
    // centimeters To Milimeters

    const Mm = inputCmToMm * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm.value +' Centimeters are equal to ' +Mm + ' Milimeters';
    
    // Miles to kilometers
    const Km1 = inputMiToKm.value * 10; 
    document.getElementById('miToKm').innerHTML = inputMiToKm +' Miles are equal to ' +Km1 + ' Kilometers';
    
    // Meters to Centimeters
    const Cm1 = inputMToCm * 10;
    document.getElementById('mToCm').innerHTML = inputMToCm +' Meters are equal to ' +Cm1 + ' Centimeters';
    
    // centimeters To kilometers
    const Km2 = inputCmToKm * 10;
    document.getElementById('cmToKm').innerHTML = inputCmToKm +' Centimeters are equal to ' +Km2 + ' Kilometers';
    
    // kilometers To meters
    const M1 = inputKmToM * 10;
    document.getElementById('kmToM').innerHTML = inputKmToM +' Kilometers are equal to ' +M1 + ' Meters';

    // Miles To meters
    const M2 = inputMiToM * 10;
    document.getElementById('miToM').innerHTML = inputMiToM +' Miles are equal to ' +M2 + ' Meters';
    
    // percentage
    const p = inputValue * 10;
    document.getElementById('percent').innerHTML = inputValue +' has the percentage ' +p ;
    
});
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
    document.getElementById('centimetersToKm').value = "";
    document.getElementById('cmToKm').innerHTML = "";
    document.getElementById('kilometersTOMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
    document.getElementById('MilesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
    document.getElementById('percentage').value = "";
    document.getElementById('percent').innerHTML = "";
});
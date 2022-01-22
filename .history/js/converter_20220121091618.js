const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers').value;
const inputMToCm = document.getElementById('metersToCentimeters').value;
const inputCmToKm = document.getElementById('centimetersToKilometers').value;
const inputKmToM = document.getElementById('kilometersTOMeters').value;
const inputMiToM = document.getElementById('MilesToMeters').value;
const inputValue = document.getElementById('Percentage').value;
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');


convert.addEventListener('click', function converter(){
    // centimeters To Milimeters

    const Mm = inputCmToMm.value * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm +' Centimeters are equal to ' +Mm + ' Milimeters';
    
    // Miles to kilometers
    const Km1 = inputMiToKm * 10; 
    document.getElementById('miToKm').innerHTML = inputMiToKm +' Centimeters are equal to ' +Km1 + ' Milimeters';
    
    // Meters to Centimeters
    const Cm1 = inputMToCm * 10;
    document.getElementById('mToCm').innerHTML = inputMToCm +' Centimeters are equal to ' +Cm1 + ' Milimeters';
    
    // centimeters To kilometers
    const Km2 = inputCmToKm * 10;
    document.getElementById('cmToKm').innerHTML = inputCmToKm +' Centimeters are equal to ' +Km2 + ' Milimeters';
    
    // kilometers To meters
    const M1 = inputKmToM * 10;
    document.getElementById('kmToM').innerHTML = inputKmToM +' Centimeters are equal to ' +M1 + ' Milimeters';

    // Miles To meters
    const M2 = inputMiToM * 10;
    document.getElementById('miToM').innerHTML = inputMiToM +' Centimeters are equal to ' +M2 + ' Milimeters';
    
    // percentage
    const p = inputValue * 10;
    document.getElementById('percent').innerHTML = inputValue +' Centimeters are equal to ' +p + ' Milimeters';
    
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
const inputCmToMm = document.getElementById('centimetersToMilimeters').value;
const inputMiToKm = document.getElementById('milesToKilometers').value;
const inputMToCm = document.getElementById('metersToCentimeters').value;
const inputCmToKm = document.getElementById('centimetersToKilometers').value;
const inputKmToM = document.getElementById('kilometersTOMeters').value;
const inputMiToM = document.getElementById('MilesToMeters').value;
const inputValue = document.getElementById('Percentage').value;
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');


convert.addEventListener('click', function converter(){
    // centimetersToMilimeters
    const Mm = inputCmToMm * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm +' Centimeters are equal to ' +Mm + ' Milimeters';
    
    // centimetersToMilimeters
    const Km1 = inputMiToKm * 10; 
    document.getElementById('cmToMm').innerHTML = inputMiToKm +' Centimeters are equal to ' +Km1 + ' Milimeters';
    
    // centimetersToMilimeters
    const Cm1 = inputMToCm * 10;
    document.getElementById('cmToMm').innerHTML = inputMToCm +' Centimeters are equal to ' +Cm1 + ' Milimeters';
    
    // centimetersToMilimeters
    const Km2 = inputCmToKm * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToKm +' Centimeters are equal to ' +Km2 + ' Milimeters';
    
    // centimetersToMilimeters
    const M1 = inputKmToM * 10;
    document.getElementById('cmToMm').innerHTML = inputKmToM +' Centimeters are equal to ' +M1 + ' Milimeters';
    
    // centimetersToMilimeters
    const p = inputValue * 10;
    document.getElementById('cmToMm').innerHTML = inputValue +' Centimeters are equal to ' +p + ' Milimeters';
    
});
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToMilimeters').value = "";
    document.getElementById('cmToMm').innerHTML = "";
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
    document.getElementById('centimetersToKm').value = "";
    document.getElementById('cmToKm').innerHTML = "";
    document.getElementById('kilometersTOMeters').value = "";
    document.getElementById('kmTOM').innerHTML = "";
    document.getElementById('MilesToMeters').value = "";
    document.getElementById('MiToM').innerHTML = "";
    document.getElementById('percentage').value = "";
    document.getElementById('prcnt').innerHTML = "";
});
const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers');
const inputMToCm = document.getElementById('metersToCentimeters');
const inputCmToKm = document.getElementById('centimetersToKilometers');
const inputKmToM = document.getElementById('kilometersTOMeters');
const inputMiToM = document.getElementById('milesToMeters');
const inputValue = document.getElementById('percentage');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');

// centimeters To Milimeters
convert.addEventListener('click', function converter(){
    const Mm = inputCmToMm.value * 10;
    document.getElementById('cmToMm').innerHTML = inputCmToMm.value +' Centimeters are equal to ' +Mm + ' Milimeters';
});   
// Miles to kilometers
convert.addEventListener('click', function converter(){
    const Km1 = inputMiToKm.value * 10; 
    document.getElementById('miToKm').innerHTML = inputMiToKm.value +' Miles are equal to ' +Km1 + ' Kilometers';
});   
// Meters to Centimeters
convert.addEventListener('click', function converter(){
    const Cm1 = inputMToCm.value * 10;
    document.getElementById('mToCm').innerHTML = inputMToCm.value +' Meters are equal to ' +Cm1 + ' Centimeters';
});   
// centimeters To kilometers
convert.addEventListener('click', function converter(){
    const Km2 = inputCmToKm.value * 10;
    document.getElementById('cmToKm').innerHTML = inputCmToKm.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
});   
// kilometers To meters
convert.addEventListener('click', function converter(){
    const M1 = inputKmToM.value * 10;
    document.getElementById('kmToM').innerHTML = inputKmToM.value +' Kilometers are equal to ' +M1 + ' Meters';
});
// Miles To meters
convert.addEventListener('click', function converter(){
    const M2 = inputMiToM.value * 10;
    document.getElementById('miToM').innerHTML = inputMiToM.value +' Miles are equal to ' +M2 + ' Meters';
});   
// percentage
convert.addEventListener('click', function converter(){
    const p = inputValue.value * 10;
    document.getElementById('percent').innerHTML = inputValue.value +' has the percentage ' +p ;
    
});
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToKilometers').value = "";
    document.getElementById('cmToKm').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('kilometersTOMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('MilesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
});
reset.addEventListener('click', function reset(){
    document.getElementById('percentage').value = "";
    document.getElementById('percent').innerHTML = "";
});
const inputCm = document.getElementById('centimetersToMilimeters').value;
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersToKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');


convert.addEventListener('click', function converter(){
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('cmToMm').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
    // centimetersToMilimeters
    const Mm = inputValue * 10;
    
    document.getElementById('prcnt').innerHTML = inputCm +' Centimeters are equal to ' +Mm + ' Milimeters';
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
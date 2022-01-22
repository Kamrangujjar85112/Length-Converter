const centimetersToMilimeters = document.getElementById('centimeters');
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersTOKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');
const convert = document.getElementById('convert');
const outputMeters = document.getElementById('outputMeters');


convert.addEventListener('click', function converterCentimeters(){
    const inputValue = centimetersToMilimeters.value; 
    const milimeters = inputValue * 10;
    document.getElementById('OutputMeters').innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';

});
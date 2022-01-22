const centimetersToMilimeters = document.getElementById('centimetersToMilimeters');
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersTOKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');


calc.addEventListener('Oninput', function convert(){
    const inputValue = centimetersToMilimeters.value; 
    const milimeters = inputValue * 10;
    document.body.innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';

});
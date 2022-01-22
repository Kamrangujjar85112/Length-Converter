const centimetersToMilimeters = document.getElementById('centimetersToMilimeters');
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersTOKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');
const convet = document.getElementById('convert');


calc.addEventListener('click', function convert(){
    const inputValue = centimetersToMilimeters.value; 
    const milimeters = inputValue * 10;
    console.log(inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters');
    document.body.innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';

});
const centimetersToMilimeters = document.getElementById('centimeters');
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersTOKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');
const convert = document.getElementById('convert');


convert.addEventListener('click', function cmtomm(){
    const inputValue = centimetersToMilimeters.value; 
    const milimeters = inputValue * 10;
    
    document.getElementById('cmtomm').innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';
});
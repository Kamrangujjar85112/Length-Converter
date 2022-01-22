const centimetersToMilimeters = document.getElementById('centimetersToMilimeters');
const milesToKilometers = document.getElementById('milesToKilometers');
const metersToCentimeters = document.getElementById('metersToCentimeters');
const centimetersTOKilometers = document.getElementById('centimetersTOKilometers');
const kilometersTOMeters = document.getElementById('kilometersTOMeters');
const MilesToMeters = document.getElementById('MilesToMeters');
const Percentage = document.getElementById('Percentage');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');


convert.addEventListener('click', function cmtomm(){
    const inputValue = centimetersToMilimeters.value; 
    const milimeters = inputValue * 10;
    
    document.getElementById('centimetersToMilimeters').innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';
});
reset.addEventListener('click', function reset(){
    document.getElementById('centimetersToMilimeters').value = ""
    document.getElementById('centimetersToMilimeters').innerHTML = ""
    document.getElementById('milesToKilometers').value = ""
    document.getElementById('milesToKilometers').innerHTML = ""
    document.getElementById('metersToCentimeters').value = ""
    document.getElementById('metersToCentimeters').innerHTML = ""
    document.getElementById('centimetersTOKilometers').value = ""
    document.getElementById('centimetersTOKilometers').innerHTML = ""
    document.getElementById('kilometersTOMeters').value = ""
    document.getElementById('kilometersTOMeters').innerHTML = ""
    document.getElementById('MilesToMeters').value = ""
    document.getElementById('MilesToMeters').innerHTML = ""
    document.getElementById('percentage').value = ""
    document.getElementById('percentage').innerHTML = ""
});
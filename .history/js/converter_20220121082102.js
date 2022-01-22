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
    
    document.getElementById('cmtomm').innerHTML = inputValue +' Centimeters are equal to ' +milimeters + ' Milimeters';
});
reset.addEventListener('click', function reset(){
    const newValue =  document.getElementById('centimetersToMilimeters').setAttribute("value" ,12)
    console.log(newValue)
    centimetersTOKilometers.value = '';
    // document.getElementById('cmtomm').innerHTML = '';
});
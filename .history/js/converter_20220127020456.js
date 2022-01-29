// Getting Elements from the pages
const inputCmToMm = document.getElementById('centimetersToMilimeters');
const inputMiToKm = document.getElementById('milesToKilometers');
const inputMToCm = document.getElementById('metersToCentimeters');
const inputCmToKm = document.getElementById('centimetersToKilometers');
const inputKmToM = document.getElementById('kilometersToMeters');
const inputMiToM = document.getElementById('milesToMeters');
const inputFValue = document.getElementById('firstValue');
const inputSValue = document.getElementById('secondValue');
const p = document.getElementById('percent');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');

// // Converter
convert?.addEventListener('click', function converter(){
// centimeters To kilometers
if(inputCmToKm?.value > 0){
    const Km2 = inputCmToKm?.value / 100000;
    document.getElementById('cmToKmp').style.display ='block';
    document.getElementById('cmToKmpError').style.display ='none';
    document.getElementById('cmToKm').innerHTML = inputCmToKm?.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
}else{
    
    document.getElementById('cmToKmp').style.display ='none';
    document.getElementById('cmToKmpError').style.display ='block';
    document.getElementById('cmToKmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>'; 
}   
// centimeters To Milimeters
if(inputCmToMm?.value){
    const Mm = inputCmToMm?.value * 10;
    document.getElementById('cmToMmp').style.display ='block';
    document.getElementById('cmToMmpError').style.display ='none';
    document.getElementById('cmToMm').innerHTML = inputCmToMm?.value +' Centimeters are equal to ' +Mm + ' Milimeters';
}else{
    
    document.getElementById('cmToMmp').style.display ='none';
    document.getElementById('cmToMmpError').style.display ='block';
    document.getElementById('cmToMmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles to kilometers
if(inputMiToKm.value){
    const Km1 = inputMiToKm?.value * 1.609; 
    document.getElementById('miToKmp').style.display ='block';
    document.getElementById('miToKmpError').style.display ='none';
    document.getElementById('miToKm').innerHTML = inputMiToKm?.value +' Miles are equal to ' +Km1 + ' Kilometers';
}else{
    
    document.getElementById('miToKmp').style.display ='none';
    document.getElementById('miToKmpError').style.display ='block';
    document.getElementById('miToKmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
// Meters to Centimeters
if(inputMToCm?.value){
    const Cm1 = inputMToCm?.value * 100;
    document.getElementById('mToCmp').style.display ='block';
    document.getElementById('mToCmpError').style.display ='none';
    document.getElementById('mToCm').innerHTML = inputMToCm?.value +' Meters are equal to ' +Cm1 + ' Centimeters';
}else{
    
    document.getElementById('mToCmp').style.display ='none';
    document.getElementById('mToCmpError').style.display ='block';
    document.getElementById('mToCmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // kilometers To meters
if(inputKmToM?.value){
    const M1 = inputKmToM?.value * 1000;
    document.getElementById('kmToMp').style.display ='block';
    document.getElementById('kmToMpError').style.display ='none';
    document.getElementById('kmToM').innerHTML = inputKmToM?.value +' Kilometers are equal to ' +M1 + ' Meters';
}else{
    
    document.getElementById('kmToMp').style.display ='none';
    document.getElementById('kmToMpError').style.display ='block';
    document.getElementById('kmToMpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles To meters
if(inputMiToM?.value){
    const M2 = inputMiToM?.value * 1609;
    document.getElementById('miToMp').style.display ='block';
    document.getElementById('miToMpError').style.display ='none';
    document.getElementById('miToM').innerHTML = inputMiToM?.value +' Miles are equal to ' +M2 + ' Meters';
}else{
    
    document.getElementById('miToMp').style.display ='none';
    document.getElementById('miToMpError').style.display ='block';
    document.getElementById('miToMpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // percentage
if(inputFValue?.value || inputSValue?.value){
    const fValue = inputFValue?.value;
    const sValue = inputSValue?.value;
    const per = (fValue  / 100) * sValue;
    document.getElementById('percentp').style.display ='block';
    document.getElementById('percentpError').style.display ='none';
    document.getElementById('percent').innerHTML = 'The ' + fValue +' Percent of ' +sValue + ' is ' + per ; 
}else{
    
    document.getElementById('percentp').style.display ='none';
    document.getElementById('percentpError').style.display ='block';
    document.getElementById('percentpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
});

// // Reset
reset?.addEventListener('click', function reset(){

// centimeters To kilometers
if(inputCmToKm?.value || inputCmToKm?.value === 0 || inputCmToKm?.value != Number){
document.getElementById('centimetersToKilometers').value = "";
document.getElementById('cmToKm').innerHTML = "";
document.getElementById('cmToKmpError').innerHTML = "";
}
// centimeters To Milimeters
if(inputCmToMm?.value){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
}
// Miles to kilometers
if(inputMiToKm?.value){
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
}
// Meters to Centimeters
if(inputMToCm?.value){
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
}
// kilometers To meters
if(inputKmToM?.value){
    document.getElementById('kilometersToMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
}
// Miles To Meters
if(inputMiToM?.value){
    document.getElementById('milesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
}
// percentage
if(inputFValue?.value || inputSValue?.value){
    document.getElementById('firstValue').value = "";
    document.getElementById('secondValue').value = "";
    document.getElementById('percent').innerHTML = "";
}
});
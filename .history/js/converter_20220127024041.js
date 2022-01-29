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
if(inputCmToKm?.value){
    const Km2 = inputCmToKm?.value / 100000;
    document.getElementById('cmToKmp').display ='block';
    document.getElementById('cmToKmpError').display ='none';
    document.getElementById('cmToKm').innerHTML = inputCmToKm?.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
}else{
    
    document.getElementById('cmToKmp').display ='none';
    document.getElementById('cmToKmpError').display ='block';
    document.getElementById('cmToKmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>'; 
}   
// centimeters To Milimeters
if(inputCmToMm?.value){
    const Mm = inputCmToMm?.value * 10;
    document.getElementById('cmToMmp').display ='block';
    document.getElementById('cmToMmpError').display ='none';
    document.getElementById('cmToMmp').innerHTML = inputCmToMm?.value +' Centimeters are equal to ' +Mm + ' Milimeters';
}else{
    
    document.getElementById('cmToMmp').display ='none';
    document.getElementById('cmToMmpError').display ='block';
    document.getElementById('cmToMmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles to kilometers
if(inputMiToKm?.value){
    const Km1 = inputMiToKm?.value * 1.609; 
    document.getElementById('miToKmp').display ='block';
    document.getElementById('miToKmpError').display ='none';
    document.getElementById('miToKmp').innerHTML = inputMiToKm?.value +' Miles are equal to ' +Km1 + ' Kilometers';
}else{
    
    document.getElementById('miToKmp').display ='none';
    document.getElementById('miToKmpError').display ='block';
    document.getElementById('miToKmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
// Meters to Centimeters
if(inputMToCm?.value){
    const Cm1 = inputMToCm?.value * 100;
    document.getElementById('mToCmp').display ='block';
    document.getElementById('mToCmpError').display ='none';
    document.getElementById('mToCmp').innerHTML = inputMToCm?.value +' Meters are equal to ' +Cm1 + ' Centimeters';
}else{
    
    document.getElementById('mToCmp').display ='none';
    document.getElementById('mToCmpError').display ='block';
    document.getElementById('mToCmpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // kilometers To meters
if(inputKmToM?.value){
    const M1 = inputKmToM?.value * 1000;
    document.getElementById('kmToMp').display ='block';
    document.getElementById('kmToMpError').display ='none';
    document.getElementById('kmToMp').innerHTML = inputKmToM?.value +' Kilometers are equal to ' +M1 + ' Meters';
}else{
    
    document.getElementById('kmToMp').display ='none';
    document.getElementById('kmToMpError').display ='block';
    document.getElementById('kmToMpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles To meters
if(inputMiToM?.value){
    const M2 = inputMiToM?.value * 1609;
    document.getElementById('miToMp').display ='block';
    document.getElementById('miToMpError').display ='none';
    document.getElementById('miToMp').innerHTML = inputMiToM?.value +' Miles are equal to ' +M2 + ' Meters';
}else{
    
    document.getElementById('miToMp').display ='none';
    document.getElementById('miToMpError').display ='block';
    document.getElementById('miToMpError').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // percentage
if(inputFValue?.value || inputSValue?.value){
    const fValue = inputFValue?.value;
    const sValue = inputSValue?.value;
    const per = (fValue  / 100) * sValue;
    document.getElementById('percentp').display ='block';
    document.getElementById('percentpError').display ='none';
    document.getElementById('percentp').innerHTML = 'The ' + fValue +' Percent of ' +sValue + ' is ' + per ; 
}else{
    
    document.getElementById('percentp').display ='none';
    document.getElementById('percentpError').display ='block';
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
if(inputCmToMm?.value || inputCmToMm?.value === 0 || inputCmToMm?.value != Number){
    document.getElementById('centimetersToMilimeters').value= "";
    document.getElementById('cmToMm').innerHTML = "";
    document.getElementById('cmToMmpError').innerHTML = "";
}
// Miles to kilometers
if(inputMiToKm?.value || inputMiToKm?.value === 0 || inputMiToKm?.value != Number){
    document.getElementById('milesToKilometers').value = "";
    document.getElementById('miToKm').innerHTML = "";
    document.getElementById('miToKmpError').innerHTML ="";
}
// Meters to Centimeters
if(inputMToCm?.value || inputMToCm?.value === 0 || inputMToCm?.value != Number){
    document.getElementById('metersToCentimeters').value = "";
    document.getElementById('mToCm').innerHTML = "";
    document.getElementById('mToCmpError').innerHTML = "";
}
// kilometers To meters
if(inputKmToM?.value || inputKmToM?.value === 0 || inputKmToM?.value != Number){
    document.getElementById('kilometersToMeters').value = "";
    document.getElementById('kmToM').innerHTML = "";
    document.getElementById('kmToMpError').innerHTML ="";
}
// Miles To Meters
if(inputMiToM?.value || inputMiToM?.value === 0 || inputMiToM?.value != Number){
    document.getElementById('milesToMeters').value = "";
    document.getElementById('miToM').innerHTML = "";
    document.getElementById('miToMpError').innerHTML= "";
}
// percentage
if(inputFValue?.value || inputSValue?.value || inputFValue?.value === 0  || inputSValue?.value === 0 || inputFValue?.value != Number || inputSValue?.value != Number){
    document.getElementById('firstValue').value = "";
    document.getElementById('secondValue').value = "";
    document.getElementById('percent').innerHTML = "";
    document.getElementById('percentpError').innerHTML ="";
}
});
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
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('cmToKm').innerHTML = inputCmToKm?.value +' Centimeters are equal to ' +Km2 + ' Kilometers';
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>'; 
}   
// centimeters To Milimeters
if(inputCmToMm?.value > 0){
    const Mm = inputCmToMm?.value * 10;
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('cmToMm').innerHTML = inputCmToMm?.value +' Centimeters are equal to ' +Mm + ' Milimeters';
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles to kilometers
if(inputMiToKm?.value > 0){
    const Km1 = inputMiToKm?.value * 1.609; 
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('miToKm').innerHTML = inputMiToKm?.value +' Miles are equal to ' +Km1 + ' Kilometers';
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
// Meters to Centimeters
if(inputMToCm?.value > 0){
    const Cm1 = inputMToCm?.value * 100;
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('mToCm').innerHTML = inputMToCm?.value +' Meters are equal to ' +Cm1 + ' Centimeters';
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // kilometers To meters
if(inputKmToM.value > 0){
    console.log(document.getElementById('kmToM'));
    const M1 = inputKmToM?.value * 1000;
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('kmToM').innerHTML = inputKmToM?.value +' Kilometers are equal to ' +M1 + ' Meters';
    return;
}else{
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // Miles To meters
if(inputMiToM?.value > 0){
    const M2 = inputMiToM?.value * 1609;
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('miToM').innerHTML = inputMiToM?.value +' Miles are equal to ' +M2 + ' Meters';
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
}
    // percentage
if(inputFValue?.value  > 0 || inputSValue?.value){
    const fValue = inputFValue?.value;
    const sValue = inputSValue?.value;
    const per = (fValue  / 100) * sValue;
    document.getElementById('resultp').style.display ='block';
    document.getElementById('errorp').style.display ='none';
    document.getElementById('percent').innerHTML = 'The ' + fValue +' Percent of ' +sValue + ' is ' + per ; 
}else{
    
    document.getElementById('resultp').style.display ='none';
    document.getElementById('errorp').style.display ='block';
    document.getElementById('errorp').innerHTML =  '<span style="color:red;">Enter A Valid Number</span>';
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
const dollar = document.getElementById('dollar');
const rupee = document.getElementById('rupee');
const calc = document.getElementById('btn');

calc.addEventListener('Oninput', function cash(){
    const inputdollar = dollar.value; 
    const inputrupee = rupee.value; 
    const amount = inputdollar * inputrupee;
    document.body.innerHTML = inputdollar +' Dollars are equal to ' +amount + ' Rupees';

});
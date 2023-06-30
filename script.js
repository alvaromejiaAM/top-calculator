function getAddition(num1, num2){
  return num1 + num2;
}
function getSubtraction(num1, num2){
  return num1 - num2;
}
function getMultiplication(num1, num2){
  return num1 * num2;
}
function getDivision(num1, num2){
  return num1 / num2;
}

function operate(num1, operator, num2){
  switch(operator){
    case '+':
     return getAddition(num1, num2);
    case '-':    
     return getSubtraction(num1, num2);
    case '*': 
     return getMultiplication(num1, num2);
    case '/':
     return getDivision(num1, num2);
  }
}

function setDisplay(num){
  const display = document.querySelector('.output');
  display.textContent = num;
}

const numKeys = document.querySelectorAll('.numKey');
const operateKey = document.querySelector('.operate');
const operatorKeys = document.querySelectorAll('.operator');

let num1 = '';
let num2 = '';
let operatorKey = '';


operateKey.addEventListener('click', ()=>{
  let total = operate(+num1, operatorKey, +num2);
  setDisplay(total);
})

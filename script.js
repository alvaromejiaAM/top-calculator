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

function getDisplay(){
  const display = document.querySelector('.output');
  return display.textContent;
}

const numKeys = document.querySelectorAll('.numKey');
const operateKey = document.querySelector('.operate');
const operatorKeys = document.querySelectorAll('.operator');

let num1 = '';
let num2 = '';
let opKey = '';

//gets numkey presses
numKeys.forEach((items) => {
  items.addEventListener("click", ()=> {
    if(!(opKey === '')){
      num2 += items.textContent.toString();
      setDisplay(num2);
    }
    else{
      num1 += items.textContent.toString();
      setDisplay(num1); 
    }
  })
});

//stores operator key
operatorKeys.forEach((items) =>{
  items.addEventListener("click", ()=>{
    opKey = items.textContent;
  })
});

//On "equals" btn press, operates
operateKey.addEventListener('click', ()=>{
  let total = operate(+num1, opKey, +num2);
  num1 = total;
  num2 = '';
  setDisplay(total);
});

//Clear all values and display
document.querySelector('.clear').addEventListener('click', ()=>{
  num1 = '',
  num2 = '',
  opKey = '';
  setDisplay(num1);
});

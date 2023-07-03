function getAddition(num1, num2){
  let temp = num1 + num2;
  setDisplay(temp)
  return temp;
}
function getSubtraction(num1, num2){
  let temp = num1 - num2;
  setDisplay(temp)
  return temp;
}
function getMultiplication(num1, num2){
  let temp = num1 * num2;
  setDisplay(temp)
  return temp;
}
function getDivision(num1, num2){
  if(num2 === 0){
    setDisplay('LOL');
    return '';
  }
  let temp = Math.round((num1 / num2)*1000000)/1000000;
  setDisplay(temp)
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
let opKey = '';
let total = '';

//gets numkey clicks
numKeys.forEach((items) => {
  items.addEventListener("click", ()=> {
    if(!(opKey === '') && !(num1 === '')){ //starts num2 string
      num2 += items.textContent.toString();
      setDisplay(num2);
    }
    else{
      num1 += items.textContent.toString();
      setDisplay(num1); 
    }
  })
});

//stores operator key clicked
operatorKeys.forEach((items) =>{
  items.addEventListener("click", ()=>{
    if(!(total === '') && num1 === ''){ //continues to add previous answer
      num1 = total;
    }
    opKey = items.textContent;
  })
});

//On "equals" btn click, operates
operateKey.addEventListener('click', ()=>{
  if(!(num1 === '') && !(num2 === '')){ //prevents total to be NaN
    total = operate(+num1, opKey, +num2);
    num1 = '';
    num2 = '';
    opKey = '';
  }
});

//Clear all values and display
document.querySelector('.clear').addEventListener('click', ()=>{
  num1 = '',
  num2 = '',
  opKey = '';
  total = '';
  setDisplay('');
});

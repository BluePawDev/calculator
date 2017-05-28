console.log('js/jq sourced');

$(onReady);

function onReady(){
  $('#cmdDivide').on('click', divide());
  $('#cmdMultiply').on('click', multiply());
  $('#cmdSubtract').on('click', subtract());
  $('#cmdAdd').on('click', add());
}

function divide(numOne, numTwo) {
  console.log('cmdDivide clicked');
}

function multiply(numOne, numTwo){
  console.log('cmdMultiply clicked');
}

function subtract(numOne, numTwo){
  console.log('cmdSubtract clicked');
}

function add(numOne, numTwo){
  console.log('cmdAdd clicked');
}

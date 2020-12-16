import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const display = document.querySelector('.displayOutput');
  let result = '';
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  } else if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  } else if (operation === 'x') {
    result = firstNumber.times(secondNumber);
  } else if (operation === '/') {
    result = firstNumber.div(secondNumber);
  } else if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }

  display.textContent = result;
};

export default operate;

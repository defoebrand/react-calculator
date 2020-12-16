import Big from 'big.js';

const operate = ({ numberOne, numberTwo, operation }) => {
  let result = '';
  console.log(numberOne);
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
    result = firstNumber.div(100);
  }

  return result;
};

export default operate;

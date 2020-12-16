import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  if (operation === '+') {
    result = Big(numberOne).plus(Big(numberTwo));
  } else if (operation === '-') {
    result = Big(numberOne).minus(Big(numberTwo));
  } else if (operation === 'x') {
    result = Big(numberOne).times(Big(numberTwo));
  } else if (operation === '/') {
    result = Big(numberOne).div(Big(numberTwo));
  } else if (operation === '%') {
    if (numberOne && numberTwo) {
      result = Big(numberOne).div(100).times(new Big(numberTwo));
    } else if (numberOne) {
      result = Big(numberOne).div(100);
    } else {
      result = Big(numberTwo).div(100);
    }
  }
  return result.toString();
};

export default operate;

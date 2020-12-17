import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '+':
      result = Big(numberOne).plus(Big(numberTwo));
      break;
    case '-':
      result = Big(numberOne).minus(Big(numberTwo));
      break;
    case 'x':
      result = Big(numberOne).times(Big(numberTwo));
      break;
    case '/':
      result = Big(numberOne).div(Big(numberTwo));
      break;
    default:
      result = 'Action Not Permitted';
      break;
  }

  return Number(result.toString());
};

export default operate;

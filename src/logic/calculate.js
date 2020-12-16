import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  if (buttonName.match(/\d|[.]/)) {
    total += buttonName;
  } else if (buttonName.match(/[^+][-$]/)) {
    total *= -1;
  } else if (buttonName.match(/[AC]/)) {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName.match(/=/)) {
    operate(total, next, operation);
    total = '';
    next = '';
    operation = '';
  }
  return calculatorData;
};

export default calculate;

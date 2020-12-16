import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  if (buttonName.match(/\d|[.]/)) {
    if (operation === null) {
      if (next === null) {
        next = buttonName;
      } else {
        next += buttonName;
      }
    } else if (total === null) {
      total = next;
      next = buttonName;
    } else {
      next += buttonName;
    }
  } else if (buttonName.match(/[^+][-$]/)) {
    next = `${next * -1}`;
  } else if (buttonName.match(/[AC]/)) {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName.match(/[=]/)) {
    total = operate(total, next, operation);
    next = '';
    operation = '';
  } else {
    operation = buttonName;
  }
  return { total, next, operation };
};

export default calculate;

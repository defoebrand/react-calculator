import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  switch (true) {
    case /[AC]/.test(buttonName):
      total = null;
      next = null;
      operation = null;
      break;
    case /[^+][-$]/.test(buttonName):
      if (next === null) {
        total *= -1;
      } else {
        next *= -1;
      }
      break;
    case /[%]/.test(buttonName):
      if (next === null) {
        total /= 100;
      } else {
        next /= 100;
      }
      break;
    case /[+|\-|/|x]/.test(buttonName):
      if (total === null) {
        total = 0;
      }
      operation = buttonName;
      break;
    case /\d/.test(buttonName):
      if (operation === null) {
        if (total === null) {
          total = buttonName;
        } else if (typeof total === 'number') {
          total = buttonName;
        } else {
          total += buttonName;
        }
      } else if (next === null) {
        next = buttonName;
      } else {
        next += buttonName;
      }
      break;
    case /[.]/.test(buttonName):
      if (operation === null) {
        if (total === null) {
          total = 0 + buttonName;
        } else if (!/[.]/.test(total)) {
          total += buttonName;
        }
      } else if (next === null) {
        next = 0 + buttonName;
      } else if (!/[.]/.test(next)) {
        next += buttonName;
      }
      break;
    case /[=]/.test(buttonName):
      if (operation !== null) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      total = 'Action Not Permitted';
      next = null;
      operation = null;
      break;
  }
  return { total, next, operation };
};

export default calculate;

// import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  if (buttonName.match(/\d|[.]/)) {
    total = buttonName;
    next = buttonName;
  } else if (buttonName.match(/[^+][-$]/)) {
    total *= -1;
  } else if (buttonName.match(/[AC]/)) {
    total = '';
    next = '';
    operation = '';
  } else {
    operation = buttonName;
  }
  return { total, next, operation };
};

export default calculate;

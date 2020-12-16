import operate from './operate';

const calculate = (buttonValue, data) => {
  const operation = data;
  const display = document.querySelector('.displayOutput');

  if (buttonValue.match(/\d/)) {
    if (display.textContent === 'Hello!') {
      operation.total = buttonValue;
      display.textContent = buttonValue;
    } else if (display.textContent.match(/[+|-|/|%|x]/)) {
      operation.next += buttonValue;
      display.textContent += `${buttonValue}`;
    } else {
      operation.total += buttonValue;
      display.textContent += buttonValue;
    }
  } else if (buttonValue.match(/=/)) {
    operate(operation);
  } else {
    operation.operation = buttonValue;
    display.textContent += ` ${buttonValue} `;
  }
};

export default calculate;

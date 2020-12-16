import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const data = calculatorData;
  const display = document.querySelector('.displayOutput');
  console.log(calculatorData);
  console.log(display.textContent);
  if (buttonName.match(/\d|[.]/)) {
    if (display.textContent === '') {
      data.total = buttonName;
      data.next = 0;
      display.textContent = buttonName;
    } else if (display.textContent.match(/[+|-|/|%|x]/)) {
      data.next += buttonName;
      display.textContent += `${buttonName}`;
    } else {
      data.total += buttonName;
      display.textContent += buttonName;
    }
  } else if (buttonName.match(/[^+][-$]/)) {
    if (display.textContent.match(/[+|-|/|%|x]/)) {
      data.next *= -1;
      display.textContent = `${data.total} ${data.operation} ${data.next}`;
    } else {
      data.total *= -1;
      display.textContent = data.total;
    }
  } else if (buttonName.match(/[AC]/)) {
    data.total = '';
    data.next = '';
    data.operation = '';
    display.textContent = null;
  } else if (buttonName.match(/=/)) {
    operate(data.total, data.next, data.operation);
    // data.total = '';
    // data.next = '';
    // data.operation = '';
  } else {
    data.operation = buttonName;
    display.textContent += ` ${buttonName} `;
  }
};

export default calculate;

const operate = data => {
  const display = document.querySelector('.displayOutput');
  let result = '';

  if (data.operation === '+') {
    result = Number(data.total) + Number(data.next);
  } else if (data.operation === '-') {
    result = Number(data.total) - Number(data.next);
  } else if (data.operation === 'x') {
    result = Number(data.total) * Number(data.next);
  } else if (data.operation === '/') {
    result = Number(data.total) / Number(data.next);
  } else if (data.operation === '%') {
    result = Number(data.total) % Number(data.next);
  }

  display.textContent = result;
};

export default operate;

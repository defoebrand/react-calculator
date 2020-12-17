import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  let display;
  if (operation === null) {
    if (total === null) {
      display = <Display result="Hello!" />;
    } else {
      display = <Display result={`${total}`} />;
    }
  } else if (next === null) {
    display = <Display result={`${total} ${operation}`} />;
  } else {
    display = <Display result={`${total} ${operation} ${next}`} />;
  }

  return (
    <>
      {display}
      <ButtonPanel clickHandler={e => handleClick(e.target.innerText)} />
    </>
  );
};

export default App;

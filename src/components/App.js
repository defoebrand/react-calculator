import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState(null);

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  useEffect(() => {
    if (operation === null) {
      if (total === null) {
        setDisplay(<Display result="Hello!" />);
      } else {
        setDisplay(<Display result={`${total}`} />);
      }
    } else if (next === null) {
      setDisplay(<Display result={`${total} ${operation}`} />);
    } else {
      setDisplay(<Display result={`${total} ${operation} ${next}`} />);
    }
  }, [total, next, operation]);

  return (
    <>
      {display}
      <ButtonPanel clickHandler={e => handleClick(e.target.innerText)} />
    </>
  );
};

export default App;

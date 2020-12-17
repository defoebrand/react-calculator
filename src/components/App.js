import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Navbar from './Navbar';

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

  const style = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '700px',
    margin: '25px auto 0',
    border: '1px solid black',
  };

  return (
    <>
      <Navbar />
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '80vw', margin: '0 auto',
      }}
      >
        <p style={{ fontSize: '35px', margin: '25px 25px 0 15px' }}>Let&apos;s do some math!</p>
        <div style={style}>
          {display}
          <ButtonPanel clickHandler={e => handleClick(e.target.innerText)} />
        </div>
      </div>
    </>
  );
};

export default App;

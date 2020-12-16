import React from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="Hello!" />
      <ButtonPanel calculate={calculate} />
    </>
  );
}

export default App;

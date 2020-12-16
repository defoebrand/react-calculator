import React from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <Display result="Hello!" />
      <ButtonPanel />
    </>
  );
}

export default App;

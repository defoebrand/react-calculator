import React from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick.bind(this);
  }

    handleClick = e => {
      calculate(this.state, e.target.innerText);
    }

    render() {
      const { total } = this.state;
      return (
        <>
          <Display result={total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      );
    }
}

export default App;

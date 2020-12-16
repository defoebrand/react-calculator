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

    handleClick = buttonName => {
      const result = calculate(this, buttonName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
      });
      console.log(this.state);
    }

    render() {
      const { total } = this.state;
      return (
        <>
          <Display result={total} />
          <ButtonPanel clickHandler={e => this.handleClick(e.target.innerText)} />
        </>
      );
    }
}

export default App;

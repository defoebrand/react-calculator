import React from 'react';
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
      const data = this.state;
      const result = calculate(data, buttonName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
      });
    }

    render() {
      const { next, total, operation } = this.state;
      let display;
      if (next) {
        display = <Display result={`${next}`} />;
      } else {
        display = <Display result="Hello!" />;
      }
      if (operation) {
        display = <Display result={`${next} ${operation}`} />;
      }
      if (total) {
        display = <Display result={`${total} ${operation} ${next}`} />;
      }
      return (
        <>

          {display}
          <ButtonPanel clickHandler={e => this.handleClick(e.target.innerText)} />
        </>
      );
    }
}

export default App;

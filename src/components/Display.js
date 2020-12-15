import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Hello, world' };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="displayContainer">
        <p className="displayOutput">{text}</p>
      </div>
    );
  }
}

export default Display;

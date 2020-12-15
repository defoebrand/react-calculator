import React from 'react';
import PropTypes from 'prop-types';

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
    const { result } = this.props;
    return (
      <div className="displayContainer">
        <p className="displayOutput">{`${text} and ${result}`}</p>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: 0,
};

export default Display;

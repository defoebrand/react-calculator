import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="displayContainer">
    <p className="displayOutput">{result}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: null,
};

export default Display;

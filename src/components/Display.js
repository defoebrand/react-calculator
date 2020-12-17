import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#848592',
  height: '100px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'right',
  paddingRight: '10px',
  fontSize: '45px',
};

const Display = ({ result }) => (
  <div className="displayContainer" style={style}>
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

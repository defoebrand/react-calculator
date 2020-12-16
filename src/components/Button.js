import PropTypes from 'prop-types';

import calculate from '../logic/calculate';

const calculatorData = {
  total: '',
  operation: '',
  next: '',
};

const Button = ({ name, group }) => (
  <button type="button" className={`button ${group}`} onClick={() => { calculate(name, calculatorData); }}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
};
Button.defaultProps = {
  name: 'Empty',
  group: 'Empty',
};

export default Button;

import PropTypes from 'prop-types';

const clickMe = value => {
  alert(value);
};
const Button = ({ name }) => (
  <button type="button" onClick={() => { clickMe(name); }}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: 'x',
};

export default Button;

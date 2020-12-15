import PropTypes from 'prop-types';

const clickMe = () => {
  alert('hello');
};
const Button = ({ name }) => (
  <button type="button" onClick={() => { clickMe(); }}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: 'x',
};

export default Button;

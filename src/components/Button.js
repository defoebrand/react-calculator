import PropTypes from 'prop-types';

const clickMe = value => {
  document.getElementById(value).style.color = 'blue';
};

const Button = ({ name }) => (
  <button type="button" id={name} onClick={() => { clickMe(name); }}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: 'Empty',
};

export default Button;

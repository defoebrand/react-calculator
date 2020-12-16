import PropTypes from 'prop-types';

const Button = ({ name, group, handleClick }) => (
  <button type="button" className={`button ${group}`} onClick={handleClick}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  handleClick: PropTypes.func,

};
Button.defaultProps = {
  name: 'Empty',
  group: 'Empty',
  handleClick: null,

};

export default Button;

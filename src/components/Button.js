import PropTypes from 'prop-types';

const Button = ({
  name, group, handleClick, color, wide,
}) => (
  <button type="button" className={`button ${group}`} onClick={handleClick} style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}>{name}</button>

);

Button.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.bool,

};
Button.defaultProps = {
  name: 'Empty',
  group: 'Empty',
  handleClick: null,
  color: '#f49040',
  wide: false,

};

export default Button;

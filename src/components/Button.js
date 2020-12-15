import PropTypes from 'prop-types';

const Button = ({ name, group }) => (
  <button type="button" className={`button ${group}`}>{name}</button>
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

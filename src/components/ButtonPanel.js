import PropTypes from 'prop-types';
import Button from './Button';

const buttonList = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'x'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};

const Panel = ({ clickHandler }) => (

  <div className="buttonPanel">
    {
      Object.keys(buttonList).map(key => (
        buttonList[key].map(value => (
          <Button key={value} name={value} group={key} handleClick={clickHandler} />
        ))))
    }
  </div>
);

Panel.propTypes = {
  clickHandler: PropTypes.func,
};
Panel.defaultProps = {
  clickHandler: null,
};

export default Panel;

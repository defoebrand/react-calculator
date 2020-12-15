import Button from './Button';

const buttonList = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'x'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};

const buttons = Object.keys(buttonList).map(key => (
  buttonList[key].map(value => (
    <Button key={key} name={value} group={key} />
  ))
));

const Panel = () => (

  <div className="buttonPanel">
    {buttons}
  </div>
);

export default Panel;

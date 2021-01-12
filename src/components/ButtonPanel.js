import { Component } from 'react';
import Button from './Button';
import PropsType from 'prop-types';

class ButtonPanel extends Component {
  constructor() {
    super(props);
  }

  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }

  render() {
    return <>
      <div>
        <Button name="AC" clickHandler={this.handleClick} />
        <Button name="+/-" clickHandler={this.handleClick} />
        <Button name="%" clickHandler={this.handleClick} />
        <Button name="÷" clickHandler={this.handleClick} />
      </div>
      <div>
        <Button name="7" clickHandler={this.handleClick} />
        <Button name="8" clickHandler={this.handleClick} />
        <Button name="9" clickHandler={this.handleClick} />
        <Button name="x" clickHandler={this.handleClick} />
      </div>
      <div>
        <Button name="4" clickHandler={this.handleClick} />
        <Button name="5" clickHandler={this.handleClick} />
        <Button name="6" clickHandler={this.handleClick} />
        <Button name="-" clickHandler={this.handleClick} />
      </div>
      <div>
        <Button name="1" clickHandler={this.handleClick} />
        <Button name="2" clickHandler={this.handleClick} />
        <Button name="3" clickHandler={this.handleClick} />
        <Button name="+" clickHandler={this.handleClick} />
      </div>
      <div>
        <Button name="0" clickHandler={this.handleClick} />
        <Button name="." clickHandler={this.handleClick} />
        <Button name="=" clickHandler={this.handleClick} />
      </div>
    </>
  }
}

ButtonPanel.propsType = {
  clickHandler: PropsType.func,
}

ButtonPanel.defaultValue = {
  clickHandler: () => { }
}


export default ButtonPanel;

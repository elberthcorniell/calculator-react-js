import { Component } from 'react';
import PropsType from 'prop-types';
import Button from './Button';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <>
        <div className="button-grid">
          <Button color="" name="AC" clickHandler={this.handleClick} />
          <Button color="" name="+/-" clickHandler={this.handleClick} />
          <Button color="" name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="button-grid">
          <Button color="" name="7" clickHandler={this.handleClick} />
          <Button color="" name="8" clickHandler={this.handleClick} />
          <Button color="" name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} />
        </div>
        <div className="button-grid">
          <Button color="" name="4" clickHandler={this.handleClick} />
          <Button color="" name="5" clickHandler={this.handleClick} />
          <Button color="" name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div className="button-grid">
          <Button color="" name="1" clickHandler={this.handleClick} />
          <Button color="" name="2" clickHandler={this.handleClick} />
          <Button color="" name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div className="button-grid zero">
          <Button color="" name="0" clickHandler={this.handleClick} />
          <Button color="" name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropsType.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => { },
};

export default ButtonPanel;

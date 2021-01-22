import { Component } from 'react';
import { ButtonPanel, Display } from './components';
import { calculate } from './logic';
import './App.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calculator">
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;

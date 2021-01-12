import { Component } from 'react';
import { ButtonPanel, Display } from './components';
import { calculate } from './logic';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    calculate(this.state, buttonName);
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;

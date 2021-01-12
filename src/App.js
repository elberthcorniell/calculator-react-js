import { ButtonPanel, Display } from './components';
import { calculate } from './logic';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick(buttonName) {
    calculate(this.state, buttonName);
  }

  render() {
    const { total } = this.state;
    return <>
      <Display result={total} />
      <ButtonPanel />
    </>
  }
}

export default App;

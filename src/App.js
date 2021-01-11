import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    const { title } = this.porps;
    return <div className="App">
      <h1>{title}</h1>
    </div>
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default App;

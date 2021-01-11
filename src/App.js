import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h1>{title}</h1>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = { title: 'Hi everyone!' };

export default App;

import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const { name } = this.props;
    return (
      <button type="button" onClick={() => { this.handleClick(name); }}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '0',
  clickHandler: () => { },
};

export default Button;

import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const { name } = this.props;
    return (
      <button type="button">
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

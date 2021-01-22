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
    const { name, color } = this.props;
    return (
      <button type="button" className={`button-calc ${color}`} onClick={() => { this.handleClick(name); }}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
  clickHandler: () => { },
  color: 'orange',
};

export default Button;

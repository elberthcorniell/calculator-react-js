import PropTypes from 'prop-types';

const button = ({ name }) => (
  <button type="button">
    {name}
  </button>
);

button.propTypes = {
  name: PropTypes.string,
};

button.defaultProps = { name: '0' };

export default button;

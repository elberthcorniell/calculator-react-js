import PropTypes from 'prop-types';

const display = ({ result }) => (
  <div style={{ height: 20 }}>
    <strong>{result}</strong>
  </div>
);

display.propTypes = {
  result: PropTypes.string,
};

display.defaultProps = { result: '0' };

export default display;

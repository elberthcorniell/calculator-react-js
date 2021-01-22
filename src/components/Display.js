import PropTypes from 'prop-types';

const display = ({ result }) => (
  <div className="display">
    <strong>{result || '0'}</strong>
  </div>
);

display.propTypes = {
  result: PropTypes.string,
};

display.defaultProps = { result: '0' };

export default display;

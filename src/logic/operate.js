import Big from 'big.js';

const operate = ({ total = '', next = '', operation = '' }) => {
  const x = new Big(total);
  const y = new Big(next);
  let result;
  switch (operation) {
    case '%':
      result = x.mod(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    case 'x':
      result = x.times(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    default:
      return { total, next, operation };
  }
  return { total: result.toString(), next: '', operation: '' };
};

export default operate;

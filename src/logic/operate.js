import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const x = new Big(numberOne || 0);
  const y = new Big(numberTwo || 0);
  let result;
  switch (operator) {
    case '%':
      result = x.div(100);
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
      return 0;
  }
  return result.toString();
};

export default operate;

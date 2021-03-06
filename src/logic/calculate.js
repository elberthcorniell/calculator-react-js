import operate from './operate';

const calculate = (dataObjt, buttonName) => {
  let { total = '', next = '', operation = '' } = dataObjt;
  if (!total) total = '';
  if (!next) next = '';
  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total = -total;
      next = -next;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (operation === '' || !operation) { total = `${total}${buttonName}`; } else next = `${next}${buttonName}`;
      break;
    case '=':
      return { total: operate(total, next, operation), next: '', operation: '' };
    default:
      operation = buttonName;
      break;
  }
  return { total, next, operation };
};

export default calculate;

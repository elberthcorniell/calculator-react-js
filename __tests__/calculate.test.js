import { calculate } from '../src/logic';

describe('Calculate', () => {
  let calc = {
    total: null,
    next: null,
    operation: null,
  };

  const reset = () => {
    calc = {
      total: null,
      next: null,
      operation: null,
    };
  };

  test('Successfully add numbers to total', () => {
    calc = calculate(calc, '1');
    expect(calc.total).toBe('1');
  });

  test('Successfully add numbers', () => {
    calc = calculate(calc, '+');
    calc = calculate(calc, '2');
    calc = calculate(calc, '=');
    expect(calc.total).toBe('3');
  });

  test('Successfully sub numbers', () => {
    calc = calculate(calc, '-');
    calc = calculate(calc, '1');
    calc = calculate(calc, '=');
    expect(calc.total).toBe('2');
  });

  test('Successfully multiply numbers', () => {
    calc = calculate(calc, 'x');
    calc = calculate(calc, '3');
    calc = calculate(calc, '=');
    expect(calc.total).toBe('6');
  });

  test('Successfully divide numbers', () => {
    calc = calculate(calc, '÷');
    calc = calculate(calc, '2');
    calc = calculate(calc, '=');
    expect(calc.total).toBe('3');
  });

  test('Zero at the start does not break operations', () => {
    reset();
    calc = calculate(calc, '0');
    calc = calculate(calc, '2');
    calc = calculate(calc, '÷');
    calc = calculate(calc, '2');
    calc = calculate(calc, '=');
    expect(calc.total).toBe('1');
  });

  test('When AC is clicked, total isn\'t null', () => {
    calc = calculate(calc, 'AC');
    expect(calc.total).not.toBe(null);
  });

  test('When AC is clicked, operation isn\'t null', () => {
    expect(calc.operation).not.toBe(null);
  });

  test('When AC is clicked, next isn\'t null', () => {
    expect(calc.next).not.toBe(null);
  });
});

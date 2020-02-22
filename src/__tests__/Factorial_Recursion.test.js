const factorial = require('../Factorial_Recursion');

test('returns 1 for 0', () => {
    let input = 0;
    const result = factorial(input);
    expect(result).toBe(1);
});

test('returns 1 for 1', () => {
    let input = 1;
    const result = factorial(input);
    expect(result).toBe(1);
});

test('returns 2 for 2', () => {
    let input = 2;
    const result = factorial(input);
    expect(result).toBe(2);
});

test('returns 6 for 3', () => {
    let input = 3;
    const result = factorial(input);
    expect(result).toBe(6);
});

test('returns 120 for 5', () => {
    let input = 5;
    const result = factorial(input);
    expect(result).toBe(120);
});

test('returns 0 for -1', () => {
    let input = -1;
    const result = factorial(input);
    expect(result).toBe(0);
});
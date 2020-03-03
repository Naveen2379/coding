const largestCommonDivisor = require('../LargestCommonDivisor');

test('returns 0 for 0,0', () => {
    let n1 = 0;
    let n2 = 0;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(0);
});

test('returns 1 for 1,1', () => {
    let n1 = 1;
    let n2 = 1;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(1);
});

test('returns 1 for 1,0', () => {
    let n1 = 1;
    let n2 = 0;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(undefined);
});

test('returns 2 for 4,6', () => {
    let n1 = 4;
    let n2 = 6;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(2);
});

test('returns 21 for 147,84', () => {
    let n1 = 4;
    let n2 = 6;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(2);
});

test('returns 1 for 2,3', () => {
    let n1 = 4;
    let n2 = 6;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(2);
});

test('returns 5 for 20,25', () => {
    let n1 = 20;
    let n2 =25;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(5);
});

test('returns 5 for 5,15', () => {
    let n1 = 5;
    let n2 =15;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(5);
});

test('returns 6 for 6,18', () => {
    let n1 = 6;
    let n2 =18;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(6);
});

test('returns 5 for 10,25', () => {
    let n1 = 10;
    let n2 =25;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(5);
});

test('returns 10 for 20,30', () => {
    let n1 = 20;
    let n2 = 30;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(10);
});

test('returns 3 for 201,30', () => {
    let n1 = 201;
    let n2 = 30;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(3);
});

test('returns 1 for 96,107', () => {
    let n1 = 96;
    let n2 = 107;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(1);
});

test('returns 4 for 28,76', () => {
    let n1 = 28;
    let n2 = 76;
    const result = largestCommonDivisor(n1, n2);
    expect(result).toBe(4);
});
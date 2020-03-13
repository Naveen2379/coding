const lastKid = require('../interview/LastKidWithPositionGiven');

test('returns 3 for 5-kids 3-toys 1-position', () => {
    const result = lastKid(5,3,1);
    expect(result).toEqual(3);
});

test('returns 5 for 5-kids 5-toys 1-position', () => {
    const result = lastKid(5,5,1);
    expect(result).toEqual(5);
});

test('returns 2 for 3-kids 5-toys 1-position', () => {
    const result = lastKid(3,5,1);
    expect(result).toEqual(2);
});

test('returns 1 for 4-kids 5-toys 1-position', () => {
    const result = lastKid(4,5,1);
    expect(result).toEqual(1);
});

test('returns 2 for 3-kids 8-toys 1-position', () => {
    const result = lastKid(3,8,1);
    expect(result).toEqual(2);
});

test('returns 6 for 6-kids 6-toys 1-position', () => {
    const result = lastKid(6,6,1);
    expect(result).toEqual(6);
});

test('returns 3 for 4-kids 2-toys 2-position', () => {
    const result = lastKid(4,2,2);
    expect(result).toEqual(3);
});

test('returns 1 for 4-kids 2-toys 4-position', () => {
    const result = lastKid(4,2,4);
    expect(result).toEqual(1);
});

test('returns 4 for 4-kids 2-toys 3-position', () => {
    const result = lastKid(4,2,3);
    expect(result).toEqual(4);
});

test('returns 2 for 3-kids 5-toys 1-position', () => {
    const result = lastKid(3,5,1);
    expect(result).toEqual(2);
});

test('returns 2 for 3-kids 7-toys 2-position', () => {
    const result = lastKid(3,7,2);
    expect(result).toEqual(2);
});

test('returns 1 for 3-kids 7-toys 1-position', () => {
    const result = lastKid(3,7,1);
    expect(result).toEqual(1);
});

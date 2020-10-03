const lastKidToGetToy = require('../Companies_Interviews/LastKidWhoGetsToy');

test('returns 2 for 3-kids 2-toys 1-position', () => {
    const result = lastKidToGetToy(3,2,1);
    expect(result).toEqual(2);
});

test('returns 2 for 3-kids 5-toys 1-position', () => {
    const result = lastKidToGetToy(3,5,1);
    expect(result).toEqual(2);
});

test('returns 1 for 1-kids 1-toys 1-position', () => {
    const result = lastKidToGetToy(1,1,1);
    expect(result).toEqual(1);
});

test('returns 4 for 8-kids 4-toys 1-position', () => {
    const result = lastKidToGetToy(8,4,1);
    expect(result).toEqual(4);
});

test('returns 4 for 8-kids 4-toys 2-position', () => {
    const result = lastKidToGetToy(8,4,2);
    expect(result).toEqual(2);
});

test('returns 1 for 3-kids 5-toys 3-position', () => {
    const result = lastKidToGetToy(3,5,3);
    expect(result).toEqual(1);
});

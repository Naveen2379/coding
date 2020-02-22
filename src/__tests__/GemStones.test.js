const gemStones = require('../GemStones');

test('returns "there should be at least two rocks" for 1\nabacd', () => {
   let input = '1\nabacd';
   const result = gemStones(input);
   expect(result).toBe('there should be at least two rocks');
});

test('returns "there should be at least two rocks" for 1\n', () => {
    let input = '2\nabacd\ncdsass';
    const result = gemStones(input);
    expect(result).toBe(3);
});

test('returns "no common elements found" for 2\nefne\nbaccd', () => {
    let input = '2\nefne\nbaccd';
    const result = gemStones(input);
    expect(result).toBe('no common elements found');
});

test('returns 1 for 2\nefne\neaced', () => {
    let input = '2\nef\nbaccdf';
    const result = gemStones(input);
    expect(result).toBe(1);
});

test('returns 3 for 2\nefnebca\neaedbbba', () => {
    let input = '2\nefnebca\neaedbbba';
    const result = gemStones(input);
    expect(result).toBe(3);
});

test('returns 2 for 3\nefa\nfeda\naseaf', () => {
    let input = '3\nefa\nfeda\naseaf';
    const result = gemStones(input);
    expect(result).toBe(3);
});
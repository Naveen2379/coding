const testOfExistence = require('../Companies_Interviews/TestOfExistence');

test('returns NO for ""', () => {
    let input = '';
    const result = testOfExistence(input);
    expect(result).toBe('NO');
});

test('returns NO for "p\nsiet" ', () => {
    let input = 'p\nsiet';
    const result = testOfExistence(input);
    expect(result).toBe('NO');
});

test('returns YES for "i\nsiet" ', () => {
   let input = 'i\nsiet';
   const result = testOfExistence(input);
   expect(result).toBe('YES');
});

test('returns YES for " \ns iet" ', () => {
    let input = ' \ns iet';
    const result = testOfExistence(input);
    expect(result).toBe('YES');
});

test('returns NO for "d" ', () => {
    let input = 't\nthis is a world';
    const result = testOfExistence(input);
    expect(result).toBe('YES');
});

test('returns NO for "z\nthis is a world" ', () => {
    let input = 'z\nthis is a world';
    const result = testOfExistence(input);
    expect(result).toBe('NO');
});





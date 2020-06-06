const Array_Sort = require('../interview/Array_Sort');

test('returns [1,2] for [2,1] ', () => {
   const result = Array_Sort([2,1]);
   expect(result).toEqual([1,2]);
});

test('returns [3,4,7] for [7,3,4]', () => {
    const result = Array_Sort([7,3,4]);
    expect(result).toEqual([3,4,7]);
});

test('returns [2,3,4,4,5,7,8,9] for [2,3,5,4,7,9,8,4]', ()=> {
    const result = Array_Sort([2,3,5,4,7,9,8,4]);
    expect(result).toEqual([2,3,4,4,5,7,8,9]);
});
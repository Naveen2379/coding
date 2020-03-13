const ArrayDiff_1 = require('../interview/ArrayDiff_1');

test('return [] for [],[]', () => {
       const result = ArrayDiff_1([],[]);
       expect(result).toEqual([]);
});

test('return [] for [1,1], []', () => {
       const result = ArrayDiff_1([1,1],[]);
       expect(result).toEqual([1,1]);
});

test('return [] for [2,2], [2]', () => {
   const result = ArrayDiff_1([2,2], [2]);
   expect(result).toEqual([]);
});

test('return [2,3] for [1,2,3], [1]', () => {
   const result = ArrayDiff_1([1,2,3], [1]);
   expect(result).toEqual([1]);
});

test('return [1,2,3] for [1,4,2,3,4], [4]', () => {
   const result = ArrayDiff_1([1,4,2,3,4], [4]);
   expect(result).toEqual([1,2,3]);
});

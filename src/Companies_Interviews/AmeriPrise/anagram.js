/* sort string and check equality */

const str1 = 'Listen';
const str2 = 'Silent';

const sortedStr1 = str1.toLowerCase().split('').sort().join('');
const sortedStr2 = str2.toLowerCase().split('').sort().join('');
console.log(sortedStr1);
console.log(sortedStr2);
console.log(sortedStr1 === sortedStr2);
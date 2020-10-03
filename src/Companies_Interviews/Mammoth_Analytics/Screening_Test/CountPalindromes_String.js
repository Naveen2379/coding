function countPalindromesInString(s) {
    let count = 0;  //or s.length if you chose to count single letters as palindrome
    let subString;

    for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length - i; j++) {
            subString = s.substring(j, j+i+1);
            console.log(subString);
            if(subString === subString.split('').reverse().join('')) {
                count += 1;
            }
        }
    }
    return count;
}

const count = countPalindromesInString('aabaa');          //4
//const count = countPalindromesInString('OPPO');          //2
console.log(count);
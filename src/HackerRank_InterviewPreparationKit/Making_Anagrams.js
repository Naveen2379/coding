function makeAnagram(a, b) {
    let str = '';
    let str1 = a.split('');
    let str2 = b.split('');
/*    let str10 = '';
    let str20 = '';*/
    for(let i=0;i<str1.length;i++) {
        for(let j=0;j<str2.length;j++) {
            if(str1[i] === str2[j]) {
                str = str+str1[i];
                /*str10 = str10 + (str1.splice(i, 1, ''));
                str20 = str20 + (str2.splice(j, 1, ''));*/
            }
        }
    }
    return (a.length+b.length)-(str.length)*2;
}

console.log(makeAnagram('cde', 'abc'));      //4
console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));      //30
console.log(makeAnagram('showman','woman'));        //2
console.log(makeAnagram('abcdeed','abed'));         //-1
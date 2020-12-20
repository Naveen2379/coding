function isPalindrome(str) {    // MAMA
    for(let i=0; i<str.length/2;i++) {   //i=0 --> M
        if(str[i] === str[str.length-1-i]) {      //str[i]=str[0]='M' === str[3]-->'M'
        }
        else {
             return false;
        }
    }
    return true;
}


var result = isPalindrome('MADAM');
console.log(result);


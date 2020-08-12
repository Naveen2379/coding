function substrCount(n, s) {
    let count = 0;
    let final_count = 0;
    const reverseStr = s.split('').reverse().join('');
    if(reverseStr === s) {
        count = ((s.length)*(s.length+1))/2;
        final_count = count;
    }
    else {
        let subStr = '';
        let count = 0;
        for (let i=0;i<s.length; i++) {
            subStr = subStr + s.charAt(i);
            if (subStr[i] === subStr[i-1]) {
                count++;
            }
            if(subStr.length>2) {
                if(subStr[i-2] === subStr[i]) {
                    count++;
                }
            }
        }
        final_count = count+s.length;
    }
    console.log(final_count);
}


substrCount(1,'a');
substrCount(3, 'aaa');
substrCount(4, 'aaaa');
substrCount(10, 'ssasadsdss');
substrCount(18, 'saasasadddssdssdss');
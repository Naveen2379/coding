function letterCount(str) {
    let count = 0;
    for(let i=0;i<str.length;i++) {
        if(str.charAt(i) === 'g') {
            count = count + 1;
        }
    }
    console.log(count);
}

let str = 'this is what happening';
letterCount(str);

function fun(str) {
    //console.log(str.length);
    let resStr = '';
    for(let i=str.length-1;i>=0;i--) {
        resStr = resStr + str.charAt(i);

    }
    console.log(resStr);
    console.log(typeof resStr);
}

let str = 'this is what happening around the world right now, so please be safe';
fun(str);

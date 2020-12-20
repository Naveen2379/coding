
/* join array like objects */
function joinArray(a, b, c) {
    const str = Array.prototype.join.call(arguments);
    console.log(typeof str);
    console.log(str);
}
joinArray(1, 'a', 110);
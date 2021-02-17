
/* Array prototype equals */
Array.prototype.equals = function (arr) {
    console.log(this);
    console.log(arr);

    if(!arr) return false;
    if(arr.length !== this.length) return false;


    for (let i=0;i<this.length;i++) {
        if( this[i] instanceof Array && arr[i] instanceof Array) {
            if(!(this[i].equals(arr[i]))) {
                return false
            }
        }
        else if(this[i] !== arr[i]) return false
    }
    return true;
}

let arr9 = [1,2,3,5];
//console.log([1,2,3].equals(arr9));
//console.log([1,2,3,5].equals(arr9));

console.log([1,2,[3,4],5,6].equals([1,2,[3,4],5,6]));
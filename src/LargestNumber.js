function largest(array) {
    if(array[0]> array[1] && array[0]>array[2]) {
        return array[0];
    }
    else {
        if(array[1]>array[2]) {
            return array[1];
        }
        else {
            return array[2];
        }
    }
}

console.log(largest([9,7,4]));
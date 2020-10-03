function greaterNums( arr1, arr2) {
    return arr1.map((each) => {
        let resultNumber = 0;
        let index = arr2.indexOf(each);
        for (let i = index; i < arr2.length; i++) {
            if (arr2[i] > each) {
                resultNumber = arr2[i];
                break;
            }
            else {
                resultNumber = -1;
            }
        }
        return resultNumber;
    });
}



console.log(greaterNums([4,1,2], [1,3,4,2]));       //[-1, 3, -1]
console.log(greaterNums([5,2,6,1,3], [6,5,1,4,7,3,2])); //[7, -1, 7, 4, -1]
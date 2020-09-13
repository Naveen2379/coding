function greaterNums( arr1, arr2) {
    console.log(arr2.length);
    return arr1.map((each) => {
        let resultNumber = 0;
        let index = arr2.indexOf(each);
        console.log(each, 'index ', index);
        for (let i = index; i < arr2.length; i++) {
            console.log('starting index ',i);
            if (arr2[i] > each) {
                console.log('if')
                console.log(arr2[i], each);
                resultNumber = arr2[i];
                console.log('resultNumber ', resultNumber);
                break;
            }
            else {
                console.log('else');
                resultNumber = -1;
                console.log('resultNumber ', resultNumber);
            }
        }
        return resultNumber;
    });
}



console.log(greaterNums([4,1,2], [1,3,4,2]));       //[-1, 3, -1]
console.log(greaterNums([5,2,6,1,3], [6,5,1,4,7,3,2])); //[7, -1, 7, 4, -1]
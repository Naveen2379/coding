function classifySignals(freq_standard, freq_signals) {
    // Write your code here
    let resultArr = [];
    for(let i=0;i<freq_signals.length;i++) {
        let elementsNearArray = [];let finalArray = [];let elementsGreaterArray =[];
        for(let j=0;j<freq_standard.length;j++) {
            if(freq_standard[j] < freq_signals[i]) {
                //console.log(freq_standard[j]+ ' is nearest element to ' + freq_signals[i]);
                elementsNearArray = elementsNearArray.concat(freq_standard[j]);
            }
            else if(freq_standard[j] > freq_signals[i]){
                //console.log(freq_standard[j] +' greater than ' + freq_signals[i]);
                elementsGreaterArray = elementsGreaterArray.concat(freq_standard[j]);
            }
            else {
                //console.log(freq_standard[j] + ' and ' +freq_signals[i] + 'elements are equal');
                finalArray = finalArray.concat(freq_standard[j]);
            }
        }
        if(finalArray.length>0) {
            //console.log(finalArray);
            //console.log('equal');
            resultArr = resultArr.concat(freq_standard.indexOf(finalArray[0])+1);
        }
        else {
            if(elementsNearArray.length>0 && elementsGreaterArray.length>0) {
                //console.log('less');
                const max = Math.min(...elementsGreaterArray);
                const min = Math.max(...elementsNearArray);
                if( (max+min)/2 <= freq_signals[i]) {
                    resultArr = resultArr.concat(freq_standard.indexOf(max)+1);
                }
                else {
                    resultArr = resultArr.concat(freq_standard.indexOf(min)+1);
                }
            }
            else if(elementsGreaterArray.length>0) {
                //console.log('greater');
                resultArr = resultArr.concat(freq_standard.indexOf(Math.min(...elementsGreaterArray))+1);
            }
            else {
                //console.log('only lesser array');
                resultArr = resultArr.concat(freq_standard.indexOf(Math.max(...elementsNearArray))+1);
            }
        }

        //console.log(resultArr);
    }
    return resultArr;
}
//classifySignals([7, 1, 12, 9, 15], [2, 9, 2000, 13, 4]);
const result = classifySignals([1, 2], [1,2,3,4,5,6,7,8,9,10]);
console.log(result);


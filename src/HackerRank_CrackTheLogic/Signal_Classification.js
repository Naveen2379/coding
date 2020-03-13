function classifySignals(freq_standard, freq_signals) {
    // Write your code here
    const unsorted_freq_standard = freq_standard.slice();
    const sorted_freq_standard = freq_standard.sort(function (a,b) {return a-b});
    /*console.log(unsorted_freq_standard);
    console.log(freq_signals);*/
    let finalArr = [];
    for( let i=0;i<freq_signals.length; i++) {
        let lessArr = [];
        let greaterArr = [];
        //console.log(freq_signals[i]);
        for( let j=0;j<freq_standard.length;j++) {
            if(sorted_freq_standard[j] < freq_signals[i]) {
                lessArr.push(sorted_freq_standard[j]);
            }
            else if( sorted_freq_standard[j] === freq_signals[i]) {
                finalArr.push(unsorted_freq_standard.indexOf(freq_signals[i])+1);
            }
            else {
                greaterArr.push(sorted_freq_standard[j]);
            }
        }

        /*console.log(lessArr);
        console.log(greaterArr);*/
        let min = Math.max(...lessArr);
        //console.log(min);
        let max = Math.min(...greaterArr);
        //console.log(max);
        let mid = Math.floor((min+max)/2);
        //console.log(mid);

        if(finalArr.length === i+1) {

        }
        else {
            if(mid < freq_signals[i]) {
                finalArr.push(unsorted_freq_standard.indexOf(max)+1);
            }
            else if( mid === freq_signals[i]) {
                let firstElement = freq_signals[i] - min;
                let lastElement = max - freq_signals[i];
                if(firstElement<lastElement) {
                    finalArr.push(unsorted_freq_standard.indexOf(min)+1);
                }
                else {
                    finalArr.push(unsorted_freq_standard.indexOf(max)+1);
                }
            }
            else {
                finalArr.push(unsorted_freq_standard.indexOf(min)+1);
            }
        }
        //console.log(finalArr);
    }
    console.log(finalArr);

    //return finalArr;
}
//classifySignals([7, 1, 12, 9, 15], [2, 9, 2000, 13, 4]);
const result = classifySignals([1, 2], [1,2,3,4,5,6,7,8,9,10]);
//console.log(result);


function minimumBribes(q) {
    console.log(q);
    let bribeCount = 0;
    for (let i=0;i<q.length;i++) {
        let diff = q[i]-(i+1);
        //console.log(diff);
        if((q[i] !== (i+1)) && diff>0) {
            //console.log(q[i] , i+1);
            if(diff < 3) {
                bribeCount = bribeCount + diff;
                //console.log('bribeCount ',bribeCount);
            }
            else {
                //console.log('in else at '+q[i]);
                bribeCount = 'too Chaos';
                break;
            }
        }
    }
    return bribeCount;
}


let inputArr = [[2,1,5,3,4], [2,5,1,3,4]];
for( let i=0;i<inputArr.length;i++) {
    console.log(minimumBribes(inputArr[i]));
}
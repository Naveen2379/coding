function minimumBribes(q) {
    let res = '';
    let bribeCount = 0;
    let desired_arr = q;
    let sorted_arr = q.sort();
    console.log(sorted_arr);
    for (let j=0; j<desired_arr.length; j++) {

        if(desired_arr[j] !== sorted_arr[j]) {
            let diff = desired_arr[j]- sorted_arr.indexOf(sorted_arr[j]);
            if(diff<3) {
                bribeCount = bribeCount + diff;
                const new_val1 = sorted_arr[j];
                const new_val2 = sorted_arr[j+1];

                sorted_arr[j] = sorted_arr[j+2];
                sorted_arr[j+1] = new_val1;
                sorted_arr[j+2] = new_val2;
            }
            else {
                res = 'Too chaotic';
            }
        }
    }
    console.log(res);
}

//minimumBribes([2,1,5,4,3]);
//minimumBribes([2,5,1,3,4]);
//minimumBribes([5,1,2,3,7,8,6,4]);
minimumBribes([1,2,5,3,7,8,6,4]);
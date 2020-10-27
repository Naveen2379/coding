function correct_value_after() {
    for( let i=0;i<10;i++) {
        console.log(i);
        if(i<5) {
            if(i<3) {
                if(i<2 && i===1) {
                    return true
                }
                else {
                    return false
                }
            }
            else {
                return false
            }
        }
        else {
            return false;
        }
    }
}

console.log(correct_value_after());
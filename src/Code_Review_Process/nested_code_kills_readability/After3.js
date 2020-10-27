function correct_value_before() {
    for(let i=0;i<10;i++) {
        if(i<2 || i===1) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(correct_value_before());
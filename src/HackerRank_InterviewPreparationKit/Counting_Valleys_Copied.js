function countingValleys_Copied(s) {
    let currentLevel = 0;
    let downSteps = 0;
    let valleyCount = 0;
    for (let i=0;i<s.length;i++) {
        if(s.charAt(i) === 'D') {
            downSteps++;
            currentLevel--;
        }
        else {
            currentLevel++;
            if(currentLevel === 0) {
                valleyCount++;
                downSteps = 0;
            }
        }
    }
    return valleyCount;
}

let s = '';
s= 'UDDDUDUU';
//s= 'DUUDUD';
//s = 'DU';
//s = 'UD';
//s = 'DDUUUUDDDDUUUD';
//s = 'UDUUDDDU';
s = 'DUDU';
console.log(countingValleys_Copied(s));
function jumping(c) {
    let count = 0;
    for(let i=0; i<c.length;i) {
        let nextJump = i+2;
        let currentVal = c[i];
        let nextJumpVal = c[i+2];
        if(nextJump > c.length ) { break; }
        else {
            if(currentVal === nextJumpVal) {
                count = count + 1;
                i = nextJump;
            }
            else {
                if(c[nextJump-1] === 1) {
                    i = nextJump+1;
                }
                else {
                    count = count + 1;
                    i = nextJump-1;
                }
            }
        }
    }
    console.log(count);
    return count;
}

jumping( [0,0,1,0,0,1,0]);
jumping([0,0,0,0,1,0]);
jumping([0,0,0,1,0,0]);
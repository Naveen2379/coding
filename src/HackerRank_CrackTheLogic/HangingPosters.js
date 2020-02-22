function hangingPosters(h, wallPoints, lengths) {
    let heightToReachByArthur = 0;
    let ladderLengths = [];
    let ladderLength = 0;
    let arthurHeight = h;
    let minLadderLengthRequired = 0;
    if(h>0) {
        for(let i=0;i<lengths.length;i++) {
            if(arthurHeight<wallPoints[i]) {
                heightToReachByArthur = wallPoints[i] - (lengths[i])/4;
                console.log(heightToReachByArthur);
                ladderLength = heightToReachByArthur - arthurHeight;
                ladderLengths.push(ladderLength);
                console.log(ladderLength);
            }
            else {
                ladderLengths.push(0);
            }
        }

    }
    minLadderLengthRequired = Math.max(...ladderLengths);
    return Math.ceil(minLadderLengthRequired);

    //return ladderLength;
}

/*const h = 5;
const wallPoints = [15, 11, 17];
const lengths = [5, 1, 2];*/
/*const wallPoints = [5, 5];
const lengths = [4, 4];*/
const h = 10;
const wallPoints = [151,92,131,165,197,30,149,199,19,85];
const lengths = [13,15,26,12,11,22,11,35,23,21];


console.log(hangingPosters(h, wallPoints, lengths));
function saveTheQueen(n, a) {
    let noOfInvaders = n;
    let noOfSoldiers = a.length;
    let dedicatedSoldierToInvader = Math.max(...a);
    let indexOfMaxTimeSoldierCanFight = a.indexOf(dedicatedSoldierToInvader);
    let removeDedicatedSoldier = a.splice(indexOfMaxTimeSoldierCanFight, 1);
    //console.log(a);
    let timeSoldiersCanFight = 0;
    for(let i=0;i<a.length; i++) {
        timeSoldiersCanFight = timeSoldiersCanFight + a[i];
    }
    let avgTimeSoldiersCanFight = (timeSoldiersCanFight)/(noOfInvaders-1);
    console.log(avgTimeSoldiersCanFight.toFixed(9));
}

const invaders = 3;
const timeEachSoldierCanFight = [1000, 100, 100, 100];
saveTheQueen(invaders, timeEachSoldierCanFight);
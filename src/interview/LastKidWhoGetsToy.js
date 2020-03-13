function lastKidToGetToy(n, k, i) {
    let lastKid;

    if(n>k) {
        lastKid = (n%k)+i;
    }
    else if(n<k) {
        lastKid = k%n;
    }
    else if(n==k) {
        return k;
    }
    return lastKid;
}

module.exports = lastKidToGetToy;
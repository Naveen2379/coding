function lastKid(n, k, i) {
    if(k>n) {
       return i+(k%n) -1;
    }
    else {
        let lastKid = i+n -1;
        if(lastKid > n) {
            lastKid = (lastKid%n) -1;
        }
        return lastKid;
    }
}

module.exports = lastKid;
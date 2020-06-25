function fun() {
    var colors = [10,20,20,10,10,20,40].map(Number);
    var pairs = new Array(101).fill(0);
    console.log(colors);
    //console.log(pairs);
    colors.forEach(color => {
        pairs[color]++;
    });

    console.log(pairs.reduce((acc, e) => {
        if (e) {
            acc = acc + parseInt(e / 2);
        }
        return acc;
    }, 0));
}
fun();
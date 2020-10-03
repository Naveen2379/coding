function constructPyramid(rows) {
    for(let i=0;i<5;i++) {
        let output = '';
        for(let j=0;j<rows-i;j++) {
            output = output + ' ';
        }
        for(let k=0;k<=i;k++) {
            output = output + '* ';
        }
        console.log(output);
    }
}

constructPyramid(5);
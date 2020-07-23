let count1=0, count2=0;

for(let i=0; i<3;i++) {
    try {
        if(i == 2 ){
            xxxx();
        }
    }
    catch (e) {
        count1++;
        console.log(count1);
    }
    finally {
        count2++;
        console.log(count2);
    }
}


//console.log(count1, count2);
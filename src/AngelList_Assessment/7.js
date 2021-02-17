let i = 3;
let j = 4;
let k = 1;
for ( i = 0; i < 3; i++ ) {
    k += j;
    j = j-1;
}
console.log(k);         //10
console.log(j);         //1

/*
i=0
k 5
j 3

i=1
k 8
j 2

i=2
k 10
j 1
*/

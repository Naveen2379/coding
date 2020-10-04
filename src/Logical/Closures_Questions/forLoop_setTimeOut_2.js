const arr = [10, 12, 15, 21];

for(var i=0; i<arr.length; i++) {
    setTimeout(() => {
        console.log(`index ${i}, element ${arr[i]}`);
    }, 3000)
}
/*
index 4, element undefined
index 4, element undefined
index 4, element undefined
index 4, element undefined
*/


/*
/!* Below are the ways to solve the problem by making it to print index and element properly *!/


for(var i=0; i<arr.length; i++) {
    ( (i) => setTimeout(() => {
        console.log(`index ${i}, element ${arr[i]}`);
    }, 3000))(i)
}
*/

/*for(var i=0; i<arr.length; i++) {
    setTimeout(function(i){
        return function () {
            console.log(`index ${i}, element ${arr[i]}`);
        }
    }(i), 3000)
}*/

/*for(let i=0; i<arr.length; i++) {
    setTimeout(function(i){
        return function () {
            console.log(`index ${i}, element ${arr[i]}`);
        }
    }(i), 3000)
}*/
/*
index 0, element 10
index 1, element 12
index 2, element 15
index 3, element 21
*/

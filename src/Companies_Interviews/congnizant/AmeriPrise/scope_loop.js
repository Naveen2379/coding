/*for(let i = 0; i<5; i ++ ) {
    console.log(i);
        setTimeout( () => {
            console.log(i);
        },2000)
}*/
// consoles 5, 5 times

for(var i = 0; i<5; i ++ ) {
    ((number) => setTimeout(() => console.log(number),2000))(i)
}
// consoles 0 1 2 3 4 after 2seconds
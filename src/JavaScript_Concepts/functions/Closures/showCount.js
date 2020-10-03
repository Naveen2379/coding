let count = 0;
function clickFun() {
    console.log('handleClick fun');
    count++;
    return function () {
        document.getElementById('count').innerText =  `${count}`;
    };
}

let handleClick = clickFun();
async function asyncCall() {
    const result = await resolveAfter2Seconds();
    return result;
}

function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    })
}

asyncCall().then(result => console.log(result));


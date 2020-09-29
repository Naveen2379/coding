/* Making functions return a Promise, modern functions return a promise */

function createAnAudioFileAsync(audioSettings) {
    console.log('async function');
    return new Promise( (resolve, reject) => {
        if(audioSettings.audioThere) {
            setTimeout( () => {
                resolve();
            }, 2000)
        }
        else {
            reject();
        }
    })
}

let audioSettings = {
    audioThere: false
}

function successCallback() {
    return 'Audio file is created successfully!!!';
}

function failureCallback() {
    return 'Audio file is not created';
}

const promise1 = createAnAudioFileAsync(audioSettings);
promise1.then(successCallback, failureCallback)
    .then(result => console.log(result))
    .catch(err => console.log(err));

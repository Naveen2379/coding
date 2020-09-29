function createAnAudioFileAsync(audioSettings, successCallback, failureCallback) {
    if(audioSettings.audioThere) {
        setTimeout( () => {
            return successCallback();
        }, 2000);
    }
    else {
        return failureCallback();
    }
}

let audioSettings = {
    audioThere: true
}

function successCallback() {
    console.log('Audio file is created successfully!!!');
}

function failureCallback() {
    console.log('Audio file is not created');
}

createAnAudioFileAsync(audioSettings, successCallback, failureCallback);



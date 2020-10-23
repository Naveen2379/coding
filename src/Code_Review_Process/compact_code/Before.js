function isHighEndDevice(device) {
    if(device.price > 50000 && device.manufacturer === 'Apple') {
        return true;
    }
    else {
        return false
    }
}

console.log(isHighEndDevice({price: 10000, manufacturer: 'Nokia'}));
console.log(isHighEndDevice({price: 55000, manufacturer: 'Apple'}));
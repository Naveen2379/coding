function isHighEndDevice(device) {
    return device.price > 50000 && device.manufacturer === 'Apple';
}

console.log(isHighEndDevice({price: 10000, manufacturer: 'Nokia'}));
console.log(isHighEndDevice({price: 55000, manufacturer: 'Apple'}));
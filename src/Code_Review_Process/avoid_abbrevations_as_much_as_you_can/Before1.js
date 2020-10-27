function is_hed(device) {
    return device.price>1000 && device.manufacturer==='apple';
}

is_hed({ price: 1500, manufacturer: 'apple'});
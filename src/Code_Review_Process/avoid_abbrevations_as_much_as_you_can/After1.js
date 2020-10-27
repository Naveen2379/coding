function is_high_end_device(device) {
    return device.price>1000 && device.manufacturer==='apple';
}
is_high_end_device({ price: 1500, manufacturer: 'apple'})
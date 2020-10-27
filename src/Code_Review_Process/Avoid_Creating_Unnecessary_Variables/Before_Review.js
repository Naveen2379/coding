function extract_phone_information(invoice, insurance) {
    const phone = invoice.item;

    let price = phone.price;
    let manufacturer = phone.manufacturer;
    let high_end_flag = false;
    if( price > 1000 && manufacturer==='Apple') {
        high_end_flag = true;
    }

    let insr_active = false;
    if(insurance.active===1) {
        insr_active = true;
    }

    const phone_info = {
        manufacturer: manufacturer,
        price: price,
        is_high_end: high_end_flag,
        has_active_insurance: insr_active
    }
    return phone_info;
}

const invoice = {
    item: {
        price: 1500,
        manufacturer: 'Apple'
    }
}
const insurance = {
    active: 0
}
console.log(extract_phone_information(invoice, insurance));
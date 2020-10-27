function extract_phone_information_after(invoice, insurance) {
    const phone = invoice.item;


    return {
        manufacturer: phone.manufacturer,
        price: phone.price,
        is_high_end: phone.price>2000 && phone.manufacturer==='Apple',
        has_active_insurance: insurance.active===1
    }
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
console.log(extract_phone_information_after(invoice, insurance))
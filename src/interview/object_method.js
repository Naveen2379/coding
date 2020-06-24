const dataSource = {
    phoneType: 'Android',
    phoneCompany: 'Moto',
    getPhoneDetails: function () {
        return 'This is an ' + this.phoneType + ' mobile belongs to ' + this.phoneCompany;
    }
}

let phone = 'Phone';
const foo = withSubscription(phone, (DataSource) =>  DataSource.getPhoneDetails());

function withSubscription(phone, getDetails) {
    console.log(phone);
    console.log(dataSource.phoneCompany);
    const details = getDetails(dataSource);
    console.log(details);
}


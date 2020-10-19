const obj1 = {
    carName: 'Fiat',
    model: 2015,
    key: 'On',
    start: function (carName) {
        {
            this.carName = carName;
            console.log(this.carName);          //Mahindra
        }
        if(this.key === 'On') {
            return this.carName + ' starts';    //Mahindra starts
        }
        else {
            console.log(this.carName);          //Mahindra
            return "car won't start";           //car won't start
        }
    }
}

const carStart = obj1.start('Mahindra');
console.log(carStart);
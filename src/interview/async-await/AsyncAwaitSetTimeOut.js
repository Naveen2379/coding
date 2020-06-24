const asyncAwait = async function asyncAwait(firstName, lastName) {
    return await setTimeout(() =>{console.log(`first name is: ${firstName} and lastName is ${lastName}`)}, 2000);
    console.log('direct consoling');
}

const value = asyncAwait('Naveen', 'Kairamkonda');
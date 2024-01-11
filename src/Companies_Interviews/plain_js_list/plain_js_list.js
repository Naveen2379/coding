
const employees = [
    {
        name: 'Ravi',
        age: 23
    },
    {
        name: 'Naveen',
        age: 26
    },
    {
        name: 'Das',
        age: 31
    },
    {
        name: 'Chintu',
        age: 28
    },
    {
        name: 'PReddy',
        age: 29
    },
    {
        name: 'Nazar',
        age: 22
    },
]

const res = employees.filter( ({age}) => age>25)
console.log('res ', res)

const elem = document.getElementById("listId");
const nodes = res.map(({name, age}) => {
    console.log(name, age)
    const messageNode = document.createElement('li')
    messageNode.innerText = `${name} is ${age} yrs old`
    elem.appendChild(messageNode)
})

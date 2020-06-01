let obj = {
  id: 1,
  name: 'ravi',
  location: 'USA',
    fullName: {
      firstName: 'ravi',
      lastName: 'kumar'
    }
};


function fun({id, fullName: { lastName } }) {
    return id + " "+ lastName;
}

console.log(fun(obj));

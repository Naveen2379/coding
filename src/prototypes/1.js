function EmployeeNames() {}


EmployeeNames.prototype = {
    names: [],
    showNames: function() {
        return this.names;
    }
}

const res1 = new EmployeeNames();
res1.names.push('foo')
console.log(res1.showNames())           //[ 'foo' ]

const res2 = new EmployeeNames()
res2.names.push('bar')
console.log(res2.showNames())       //[ 'foo', 'bar' ]
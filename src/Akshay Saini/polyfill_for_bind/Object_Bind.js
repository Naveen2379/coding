const college = {
    name: 'RGUKT',
    location: 'Basar'
}

const collegeInfo = function () {
    console.log(`${this.name} locates in ${this.location}`);
}


const boundFun = collegeInfo.bind(college);
//boundFun();
//console.log(boundFun);

for (const key in college) {
    console.log(key);
}
//console.log(college);
//console.log(college.hasOwnProperty(location));


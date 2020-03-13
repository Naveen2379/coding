function Profile(name, age, college) {
    this.name = name;           //here, this means the object on which it is called upon - myProfile/hisProfile -myProfile.name
    this.age = age;             //myProfile.age
    this.college = college;        //myProfile.college
    this.fullName = function (fullName) {
        console.log(fullName);
    }
}

let myProfile = new Profile('ravi',26, 'iiit');
//console.log(myProfile.name);
myProfile.nationality = 'India';
//console.log(myProfile);

let hisProfile = new Profile('sravana', 21, 'rgukt');
//hisProfile.fullName('sravana bar');
//console.log(hisProfile);
//hisProfile.fullName('ravi varma');
console.log(typeof(hisProfile.fullName));

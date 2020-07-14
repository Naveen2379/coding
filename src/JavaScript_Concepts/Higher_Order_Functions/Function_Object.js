function greeting() {
    console.log('Hello World!');
}

greeting();             //Hello World!

//we can add properties to functions as we do with objects
greeting.lang = 'English';

console.log(greeting.lang);     //English

/*Note:
* this is perfectly valid in JS, this is considered as a harmful practise.
* You shouldn't add random properties to functions, instead use objects and add properties to it.
* */
/*In JavaScript, if a class is used before it is defined (i.e. it is used in an expression and then defined later in the same file), which of the following are true?
Pick the closest option
This will always give an error
This will give an error only if use strict; has been declared earlier in the file
This will always work
This will work in some browsers but not in others
This will work only if use strict; has not been declared earlier in the file
*/

"use strict";
let c = new C();
c.f();

class C {
    constructor(props) {
        let a = 10;
    }
    f() {
        console.log('this is a string');
    }
}


/**  */


interface UserInterface {
    id: number;
    name: string;
}
type UserType = {
    id: number;
    name: string;
}

const User10: UserInterface = {
    id: 1,
    name: 'Naveen'
}
const User11: UserType = {
    id: 1,
    name: 'Naveen'
}

/** extends */
interface ProfileInterface extends UserInterface {
    profileUrl: string
}
type ProfileType = UserType & {
    profileUrl: string
}

/** implements */
class User1 implements UserInterface {
    id = 1;
    name = "foo"
}

class User2 implements UserType {
    id = 1;
    name = "foo"
}

/**
 * inside interfaces  -can't override properties
 * in type  -it's possible
 */
/** problem */
// interface ProfileInterface1 extends UserInterface {
//     name: string[]
// }
type ProfileType1 = UserType & {
    name: string[]
}
/**
 * if you need to create Primitive types, function types, union types, tuple types  -you can use Type
 * interface    -doesn't work for those
 */

/** 
 * you can't redefine the same name with Type & Interface
 * you can't redefine the same name with Type & Type
 * for interface it works (interface & interface)
 */

interface Go1 {
    name: string
}
interface Go1 {
    age: number
}
const User8: Go1 = {
    name: 'naveen',
    age: 29
}

// interface Go2 {
//     name: string
// }
type Go2 = {
    name: string
}
type Go3 = {
    age: number
}
const User9: Go2 & Go3 = {
    name: 'naveen',
    age: 29
}
// const User9: Go2 = {
//     name: 'naveen',
//     age: 29
// }


let a: any
let b: unknown

a.whatever()    //any   -let's you do anything you want             -doesn't throw any error
b.whatever()    //unknow    -restricts you to do anything at all    -we don't know what it is  -throws an error 

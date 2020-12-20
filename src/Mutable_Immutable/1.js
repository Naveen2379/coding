/* Mutable is a type of variable that can be changed
* Objects are mutable
* Strings and Numbers -primitive values are immutables
* Mutable object's state can be modified after it is created
* Immutable object's state can't be changed once the object is created
* */

//a new object with string value is created
var immutableString = 'Hello';

//here, appending "World" to the existing value
immutableString = immutableString + " World!!!";

/* On appending the "immutableString" with a string value, following events occur
* 1. Existing value of "immutableString" is retrieved
  2. "World" is appended to the existing value of "immutableString"
  3. The resultant value is then allocated to a new block of memory
  4. "immutableString" object now points to the newly created memory space
  5. Previously created memory space is now available for garbage collection.
*  */




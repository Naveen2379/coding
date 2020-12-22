/* map() followed by flat() of depth 1 */
let arr1 = ["it's Sunny in", "", "California"];

const res_arr1 = arr1.map(x => x.split(" "));
console.log(res_arr1);      // [["it's","Sunny","in"],[""],["California"]]

const res_arr2 = arr1.flatMap(x => x.split(" "));
console.log(res_arr2);      // ["it's","Sunny","in", "", "California"]
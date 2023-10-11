// console.log(2>1);
// console.log(2 >= 1);


// console.log("2" > 1);
// console.log("02" > 1);


// the reason is that an equality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.

/* avoid that type of conversion because that's not a clean code
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
*/

// ===
console.log("2" === 2);  // in == it convert data type automatically but in === it check data type also



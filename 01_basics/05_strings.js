const name = "nitesh"
const repoCount = 10

// not recomanded to write in this way
// console.log(name + repoCount + " Value");

// write in this way  => string interpoletion
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nitesh-hh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   nitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nitesh.com/nitesh%20kumawat"
console.log(url.replace('%20', '-'))

console.log(url.includes('sumdar'))

console.log(gameName.split('-'));
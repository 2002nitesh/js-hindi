// if
// const isUserLggedIn = true
// const temperature = 41

// if(2 == "2"){
//     console.log("executed");
// }
// if(2 === "2"){  // it check data type also
//     console.log("executed");
// }

// if(temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("Not less than 50");
// }

// // <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000
// do not this
// if(balance > 500) console.log("test"), console.log("test2");;

// if(balance < 500){

// }else if(){

// }else if(){

// }else{

// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
// this ->>>>>>> current contest
const user = {
    username: "hitesh",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "sem"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     // console.log(this.username); // we don't use this in functions
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); // we don't use this in functions
// }
//chai()


// arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// if statment only of one line 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// for object return
const addTwo = (num1, num2) => ({username: "nitesh"})

console.log(addTwo(3,4));


// const myArray = [2,5,3,7,8]

// myArray.forEach()
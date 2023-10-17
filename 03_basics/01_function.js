function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  // number1 and number2 are parameters
//     console.log(number1 + number2);
// }
 
// addTwoNumbers(3, 4 )   // 3 and 4 are arguments

function addTwoNumbers(number1, number2){  // number1 and number2 are parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){  // ...  rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "nitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// direct object pass
handleObject({
    username: "nitesh",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// direct array pass

console.log(returnSecondValue([100,200,300,400]));

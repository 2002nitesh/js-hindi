// var c = 300
// let a = 300
// if(true){
//     let a = 10
//     console.log("inner: ", a);
//     const b = 20
//     // var c = 30
// }


// console.log(a);   // let is a block scope
// console.log(b);  // const also a block scope
// console.log(c);  // var is a globle scope


function one(){
    const username = "nitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "nitesh"
    if(username === "nitesh"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


//*********** intersting ******************


function addone(value){
    return value + 1
}

console.log(addone(5));


const addTwo = function(num){
    return num + 2
}

addTwo(5)
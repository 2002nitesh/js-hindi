// var c = 300
let a = 300
if(true){
    let a = 10
    console.log("inner: ", a);
    const b = 20
    // var c = 30
}


console.log(a);   // let is a block scope
// console.log(b);  // const also a block scope
// console.log(c);  // var is a globle scope
// singleton
// Object.create

// object leterals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nitesh",
    "full name": "Nitesh Kumar Kumawat",
    [mySym]: "myKey1",
    age: 20,
    location: "jaipur",
    email: "nitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "nitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nitesh@chatgptmicrosoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


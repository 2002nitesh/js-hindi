// singleton
// const tinderUser = new Object()

// non singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitesh",
            lastname: "kumawat"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj3}
// const obj3 = Object.assign({},obj1,obj2,obj4)

// spriding
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
    },
    {
    },
    {
    },
    {
    },
]

users[0].id
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


// de structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// api  => value comes in form of json 
// json look like object

// {
//     "name": "nitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// many time comes in array form
[
    {},
    {},
    {}
]


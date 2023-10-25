// const coding = ["js", "ruby", "java", "python", "cpp"]


// forEach no return any values
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num>4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Five', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Seven', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Eight', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 2004},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === 'History'
})
console.log(userBooks);
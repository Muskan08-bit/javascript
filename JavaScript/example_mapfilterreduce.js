//array of objects
const users = [
    {firstName: "muskan", lastname: "tailor", age: 23},
    {firstName: "shreya", lastname: "jain", age: 25},
    {firstName: "priya", lastname: "sharma", age: 25},
    {firstName: "mansi", lastname: "agarwal", age: 24},
]
const fullname = users.map((x) => x.firstName + ' ' +x.lastname)
console.log(fullname)

const mapAge = users.reduce(function (obj ,user) {
    if(!obj[user.age]) {
        obj[user.age] = 1
    }
    else
    obj[user.age]++
return obj
}, {})
console.log(mapAge)

//chaining of filter and map
const filterUser = users.filter((user) => user.age<25).map((user) => user.firstName)
console.log(filterUser)
// same by only reduce
const reduceUser = users.reduce(function (acc, curr) {
    if(curr.age<25)
    acc.push(curr.firstName)
    return acc;
},[ ])
console.log(reduceUser)
const Github = "https://api.github.com/users/muskan-tailor-robomq"

const user = fetch(Github)

console.log(user)
//output will be Promise<pending> and after sometime the promise state will changed to fulfilled
user.then(function(data) {
    console.log(data)
})
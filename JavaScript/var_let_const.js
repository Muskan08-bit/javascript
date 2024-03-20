console.log("Difference between var, let and const")
var a=67
var b="Muskan"
var c=null
{
    var b="this"
    console.log(b)
}
console.log(b)
//let
let d="Muskan"
{
    let d="Hello"
    console.log(d)
}
console.log(d)
//Throws an error
// const author ="Muskan"
// let author ="Sam" //eror
// author = "Mike" //error because const cannot be updated or redeclared in javascript
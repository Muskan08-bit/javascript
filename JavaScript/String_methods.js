let name ="Muskan"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4)) //4 not included  
console.log(name.slice(2))
console.log(name.replace("Muskan","Sam"))
console.log(name.replace("Sam","Muskan"))
let person= " Muskan "
console.log(person.trim())
let person2 ="Tailor"
console.log(person.concat(person2))

//strings are immutable such as
console.log(person[0])
console.log(person[1])
console.log(person[2])
console.log(person[3])
console.log(person[4])
console.log(person[5])
for(let i=0;i<person.length;i++)
{
    console.log(person[i])
}
let num =[3,54,1,2,4]
/*
for (let i=0;i<num.length;i++)
{
    console.log(num[i])
}
*/
num.forEach((element) => {
    console.log(element*element)
})

//Array.from
let name ="Muskan"
let arr = Array.from(name)
console.log(arr)

for(let i of num)
{
    console.log(i)
}

for (let i in num)
{
    console.log(num[i])
}
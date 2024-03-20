

//for loop
let n=5
let fact=1
for(let i=n;i>=1;i--)
{
    fact*=i
}
console.log("Factorial of 5 = ",fact)

//for in loops
let obj= {
    "Muskan": 99,
    "Shiv": 87,
    "Shivani": 74,
    "Shivika": 59
}
for (let a in obj)
{
    console.log("Marks of "+ a + " are " + obj[a])
}

//for of loops
for (let a of "Muskan")
{
     console.log(a)
}

//while loop
let z=8
while(z>0)
{
    console.log(z)
    z--;
}

//do while loops
let d=8
do
{
    d--;
    console.log(d)
}
while(d>0)

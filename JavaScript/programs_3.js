//1
const marks ={
    "Muskan": 98,
    "Rohan": 70,
    "Aakash": 70
}
for(let a=0;a<Object.keys(marks).length;a++)
{
    console.log("Marks of student " + Object.keys(marks)[a] +" are "+ marks[Object.keys(marks)[a]])
}

//2
const mark ={
    "Muskan": 98,
    "Rohan": 70,
    "Aakash": 70
}
for(let a in mark)
{
    console.log("Marks of student " + a +" are "+ mark[a])
}

//4
const mean =(a, b, c, d, e) => {
    return (a+b+c+d+e)/4
}

console.log("Mean of 5 nos are: "+ mean(2,4,6,8,1))

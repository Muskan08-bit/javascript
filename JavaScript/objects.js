let  lecture = 10;
let section = 3;
let title = "JavaScript"
const course = {
    lecture: 10,
    section: 3,
    title: "JavaScript",
    notes: {
        introduction: "Wecome" //nested objects created
    },
    enroll() {
        console.log("You are enrolled. ")
    }
}
course.enroll()
console.log(course.title)

course.price = 999 //objects are dynamic in nature 
console.log(course.price) 


//2nd Method
//Factory function
// function.cre
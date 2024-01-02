// Object de-structures

const course = {
 corseName:"javascript",
 price:999,
 courseInstructor:"Hitesh Choudhary"
}
// console.log(course.corseName)
// console.log(course['price'])
// console.log(course.courseInstructor)


const {courseInstructor:instrc,corseName:cN} = course
// console.log(instrc)
// console.log(cN)


const userFullInformation = {
 userFullName:"Umair Abbasi",
 userFullAge:21,
 userSkillSet:"Frontend Developer",
 userEducation:"BSCS"
}

console.log(userFullInformation)

const {userFullName:name,userFullAge:age,userSkillSet:skill,userEducation:edu} = userFullInformation

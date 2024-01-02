// Topic Object de-structucting

// const tinderUser = new Object({name:"umair",age:21})
// const tinderUser2 = Object.create({name:"umair",age:21})
// console.log(tinderUser)
// console.log(tinderUser2)

const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "Noman"
tinderUser.isLoggedIn = false
// console.log(tinderUser)


const regularUser = {
 email:"some@gamil.com3",
 fullName:{
  userFullName:{
   firstName:"Umair",
   lastName:"Abbasi"
  }
 }
}

// console.log(regularUser.fullName.userFullName.lastName)

// merging objects

const merge = {...tinderUser,...regularUser}

// console.log(merge)


// another way
const merge2 = Object.assign({},tinderUser,regularUser);
// console.log(merge2)



const users = [
 {
  id:123,
  email:"one@gmail.com"
 },
 {
  id:456,
  email:"two@gmail.com"
 },
 {
  id:789,
  email:"three@gamil.com"
 }
]

// console.log(users[0].email)
// console.log(users[2].id)


// find keys and values

// console.log(tinderUser)
// console.log( Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true
// const tinderusers = new Object();

const tinderUser = {}
tinderUser.id = 23,
tinderUser.name = "Musharraf",
tinderUser.isLoggedin =  false

// console.log(tinderUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Mohammed",
            lastname: "Musharraf"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)


const obj = {
    1: "a",
    2: "b"
}
const obj1 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj, obj1}

const obj3 = Object.assign({},obj, obj1)
// console.log(obj3)


const obj4 = {...obj, ...obj1}
// console.log(obj4)




// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Musharraf"
}

const {courseInstructor : inst} = course
console.log(inst)



// json 
// {
//     "coursename": "Js in hindi",
//     "price": "999",
//     "courseInstructor": "Musharraf"
// }

[
    {},
    {},
    {}

]


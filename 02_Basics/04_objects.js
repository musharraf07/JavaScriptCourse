// object literals 

// Object.create   this is called as creating object through constructor method


const mySym = Symbol("Key1")

const Jsuser = {
    name:"Musharraf",
id:12,
age:20,
"fullname" : "Mohammed Musharraf",
clg:"PCACS",
lastlogin: ["monday", "tuesday"],
[mySym] : "Key1"
}

// console.log(Jsuser.name);
// console.log(Jsuser["clg"])
// console.log(Jsuser["fullname"])
// console.log(Jsuser[mySym])


Jsuser.age = 19;
// Object.freeze(Jsuser)
Jsuser.age = 29;
// console.log(Jsuser)


Jsuser.greeting = function(){
    console.log("Hello Js User");
}

console.log(Jsuser.greeting())

Jsuser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greeting2())
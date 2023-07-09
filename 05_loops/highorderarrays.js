// for of 

const arr =[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
    
}

const greetings = "Hello world!"

for (const i of greetings) {
    // console.log(`Each char is ${i}`);
   
}


// maps it holds key value pairs, it sotres data in order, it stores only unique vlaues

const map = new Map ()
map.set('IN', "india")
map.set('USA', "United states of america")
map.set('FR', "france")
map.set('IN', "india")
// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ":", value);
    
}


const myObj ={
    name: "musharraf",
    'age':19,
    'clg':'pcacs'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":", value);
// }
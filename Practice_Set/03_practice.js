// Q1

const marks = {
    english:90,
    maths:70,
    hindi:40,
    marathi:50,
    science:80,
    social_science: 60
}

// for (let i = 0; i < Object.keys(marks).length; i++) {
    
//     console.log("The marks of  " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]] );
    
// }




// Q2
// for (let i in marks){
//     console.log(i + " "+  marks[i]);
// }


// Q3
/*
let num = 8;
let i = 8;
while(i!=num){
    console.log("sorry ");
}
console.log("you have entered correct number");


*/

// Q4
const mean = (a,b,c,d) =>{
    return(a+b+c+d);
}


console.log(mean(1,2,3,4));
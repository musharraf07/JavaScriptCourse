
// var c = 300;

let a = 500;


if(true){
let a = 20;
const b = 30;
var c = 40;
// console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Musharraf"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(true) {
    const un = "mush"
    if(un === "mush"){
        const website = " yt"
        // console.log(un + website)
    } 
    // console.log(website)
}

// console.log(un)





// interseting concept


console.log(addone(2));  // this is allowed because it is the tradiational function 
function addone(num) {
    return num + 1
}




// addtwo(4)  // this is not allowed because the function addtwo is created and stord in a variable
const addtwo = function (num) {
    return num + 2
}

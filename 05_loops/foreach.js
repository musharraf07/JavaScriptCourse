const programming =["js","c++","java","python"]

// programming.forEach( function (i) {
//     console.log(i);
// })


// programming.forEach((i)=>{
//     console.log(i);
// })

// function printMe(item){
//     console.log(item);
// }

// programming.forEach(printMe)


// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const coding =[
    {
        languagename: "javascript",
        languageFileName: "js"
    },
    {
        languagename: "java",
        languageFileName: "java"
    },
    {
        languagename: "python",
        languageFile: "py"
    }
]


coding.forEach((item) => {
    console.log(item.languageFileName);
})
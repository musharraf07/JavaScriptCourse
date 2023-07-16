
// Q1

// function greet(name){
//     console.log(`hello ${name} how are you?`);

// }

// greet("Musharraf")

// Q2
// const sqr = (num) =>{
//     console.log(num*num);
// }

// sqr(2)

// Q3
// function lettercounter(str) {

//     const counts = {}

//     for(let i =0; i<str.length; i++){
//         const char =str[i];
//         // console.log(char);

//         if(counts[char]){
//             counts[char]++;

//         }
//         else{
//             counts[char] = 1
//         }
//     }
//     return counts;
    
// }

// const ex = lettercounter("musharraf rahamathulla")
// console.log(ex);

// // Q4
// function createCounter(){

//   let count = 0;

//   return function(){
//     count++;
//     return count;
//   }

// }
// const counter = createCounter()

// console.log(counter());




// Q5

// function sumOddEven(arr) {
//     let sum= 0;
//     for(let i =0; i<arr.length; i++){
        
//     if(arr[i]%2 == 0){
//         // console.log("enen");
//         sum = sum+ arr[i];
//     }
    
//     }
    
//     return sum
// }
// const arr1 =[1,2,3,4,5,6]
// console.log(sumOddEven(arr1));


// Q6

// function sumOddEven(arr) {
//     let sum= 0;
//     for(let i =0; i<arr.length; i++){
//         sum = sum+ arr[i];
//     }
//     return sum
// }
// const arr1 =[1,2,3,4,5,6]
// console.log(sumOddEven(arr1));

// Q7
// function filterStrings (arr) {
//     let fillteredarray= [];
//     for(let i =0; i<arr.length; i++){
//         const ar = arr[i];
//        if(arr[i].length>5){
//         fillteredarray.push(arr[i])
//        }
//        } 

//     return fillteredarray
// }
// const arr1 =["flash","batman","musharraf","rahamathulla"]
// console.log(filterStrings (arr1))

// Q8

// function demo(obj){
//     const keys = Object.keys(obj)
//       return keys  
//     };

//     const obj1 ={
//         name:"musharraf",
//         id:101
//     }
// console.log(demo(obj1));

// Q9

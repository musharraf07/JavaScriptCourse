// for (let i = 0; i<10; i++){
//     console.log(i);
// }

// for (let i = 1; i<10; i++){
//     console.log(i);
//     for (let j = 1; j<10; j++){
//         // console.log(`inner loop ${j} outter looop ${i}`  );
//         console.log(i + '*' + j + '=' + " " + i*j);
//     }
// }


// let myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }



// break and continue
for (let index = 0; index <= 10; index++) {
    if(index ==5){
        console.log(`detected 5`);
        continue
    }
    console.log(index);
    
}
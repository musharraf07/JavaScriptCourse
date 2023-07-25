// Q1
// const button = document.getElementById('button');

// button.addEventListener('click', function () {
//     button.innerHTML = 'submitted';
    
// })


// Q2

// function addClassOnMouseOver(elementID, className) {
//     const element = document.getElementById(elementID);
//     element.addEventListener("mouseover", () => {
//       element.classList.add(className);
//     });
//   } 
 
//   addClassOnMouseOver("button", "active");



// Q3

// function removeClassOnScroll(elementID, className){
//     const element = document.getElementById(elementID);
//     element.addEventListener("scroll", () => {
//         element.classList.remove(className);
//         console.log("class removed");
//     })
// }
// removeClassOnScroll("button", "active")


// Q4
// function toggleDivDisplayOnClick(divId) {
//     const div = document.getElementById(divId);
//     if (div.style.display === "none") {
//       div.style.display = "block";
//     } else {
//       div.style.display = "none";
//     }
//   }
  

// Q5


//  function validateForm (event){
//     event.preventDefault();

//     let isValid =true;

//     for(let i = 0; i<form.elemenst.length; i++){
//         const input = form.element[i]
//         const value = input.value.trim()

//         if (input.hasAttribute("required" && value === "")) {
//             isValid = false;
//             input.classList.add('invalid');
//         }
//         else{
//             input.classList.add('invalid');
//         }
//     }

//     const message = document.getElementById("message");
//   if (isValid) {
//     message.classList.remove("error");
//     message.innerText = "Form submitted successfully!";
//   } else {
//     message.classList.add("error");
//     message.innerText = "Please fill out all required fields.";
//   }
// }
// const form = document.getElementById("form");
// form.addEventListener("submit", validateForm); 







// Q6
function fetchdata(url, callback) 
{

  fetch(url)
  .then(respone => respone.json)
  .then(data => callback(null, data))
  .catch(error => callback(error, null))
  
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchdata(url, (error, data) => {
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
  }

})
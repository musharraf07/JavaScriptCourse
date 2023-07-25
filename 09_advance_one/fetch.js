// fetch api returns a promise 


let p = fetch("https://jsonplaceholder.typicode.com/todos/1");
p.then((response) =>{
    console.log(response.status);
    console.log(response.ok);
    return response.json()
})
.then((value2) =>{
     console.log(value2);
})
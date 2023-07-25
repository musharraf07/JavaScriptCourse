let key = prompt("enter key you want to set")
let value = prompt("enter value you want to set")


localStorage.setItem(key, value)

console.log(localStorage.getItem(key));

if (key == "red") {
    localStorage.removeItem(key)
    
}

if (key == 0) {
    localStorage.clear()
    
}
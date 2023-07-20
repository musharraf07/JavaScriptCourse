const { log } = require("async");



async function mush(){
    return 5;
}
// async returns a promise through which we can use .then()
mush().then((x) =>{
    console.log(x);
});


function harry(){
let delhiWeather = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("28 deg")
    }, 2000)
})
let mumbaiWeather = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("25 deg")
    }, 4000)
})
delhiWeather.then(alert)
mumbaiWeather.then(alert)


}


console.log("Welcome to weather control room");
harry();
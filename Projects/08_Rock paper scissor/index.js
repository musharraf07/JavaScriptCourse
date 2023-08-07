const user = prompt("Enter Rock, paper or scissor").toLowerCase();
// console.log(user);

let cpuI = Math.floor(Math.random() * 3 );
console.log(cpuI);

let cpu = ["rock", "paper", "scissor"][cpuI];
console.log(cpu);

const match = (cpu, user) => {
    if (cpu === user) {
        return "nobody";
        
    }
    else if(cpu === "rock" && user ==="scissor" || cpu==="scissor" && user ==="paper" || cpu==="paper" && user ==="rock"){
        return "cpu"

    }
    else if(user === "rock" && cpu ==="scissor" || user==="scissor" && cpu ==="paper" || user==="paper" && cpu==="rock"){
        return "user"

    }
}
let result = match(cpu, user);
document.write(`cpu: ${cpu} <br> user: ${user} <br> the winner is ${result}`);
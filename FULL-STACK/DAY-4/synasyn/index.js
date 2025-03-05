console.log("partha");
console.log("bhukta");


function partha() {
    setTimeout(()=>{
console.log("partha pratim bhukta 1")
    },2000)
    
}
partha()
function bhukta() {
    setTimeout(()=>{
console.log("partha pratim bhukta 2")
    },1000)
    
}
bhukta()
console.log("pratim")

console.log("partha");
console.log("bhukta");


async function api() {
    await console.log("this is asyn api ")
    
}
api()

console.log("pratim")

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

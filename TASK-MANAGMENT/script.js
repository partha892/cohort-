const taskbtn = document.getElementById("task-btn");
const todoboard = document.getElementById("todo-board");


taskbtn.addEventListener("click",()=>{
    const input = prompt("Enter your task")
    if(!input)return;

    const addcard = document.createElement("p")
    addcard.classList.add("item")
    addcard.innerText = input;
    addcard.setAttribute("draggable",true)

    todoboard.appendChild(addcard)
})

const allboard = document.querySelectorAll(".board"); 
const allitem = document.getElementsByClassName("item"); 


allboard.forEach((item)=>{
item.addEventListener("dragstart",()=>{
item.classList.add("flying");

})
item.addEventListener("dragend",()=>{
    item.classList.remove("flying");


})
})
allboard.forEach((board) => {
    board.addEventListener("dragover",()=>{
       const flyingelement =  document.querySelectorAll(".flying")
        
       board.appendChild(flyingelement)
    })
});
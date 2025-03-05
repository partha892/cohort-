const taskbtn = document.getElementById("task-btn");
const todoboard = document.getElementById("todo-board");


taskbtn.addEventListener("click", () => {
    const input = prompt("Enter your task");
    if (!input) return;

    const addcard = document.createElement("p");
    const delbutton = document.createElement("button")
    const editbutton = document.createElement("button")


    delbutton.textContent = "X"
    editbutton.textContent = "Edit"
    

delbutton.addEventListener("click",()=>{
    addcard.remove();
})

editbutton.addEventListener("click",()=>{

})




    addcard.classList.add("item");
    addcard.innerText = input;
    addcard.setAttribute("draggable", true);
    todoboard.appendChild(addcard);
    addcard.appendChild(editbutton);
    addcard.appendChild(delbutton);
    


    addcard.addEventListener("dragstart", () => {
        addcard.classList.add("flying");
    });
    addcard.addEventListener("dragend", () => {
        addcard.classList.remove("flying");
    });

});

const allboard = document.querySelectorAll(".board");
const allitem = document.querySelectorAll(".item");

allitem.forEach((item) => {
    item.addEventListener("dragstart", () => {
        item.classList.add("flying");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("flying");
    });
});

allboard.forEach((board) => {
    board.addEventListener("dragover", function (event) {
        event.preventDefault(); // Allow dropping
    });

    board.addEventListener("drop", () => {
        const flyingelement = document.querySelector(".flying");
        console.log(flyingelement);
        if (flyingelement) {
            board.appendChild(flyingelement);
        }
    });
});

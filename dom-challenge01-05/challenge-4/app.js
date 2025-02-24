/**
 * Write your challenge solution here
 */
const userinput = document.getElementById("taskInput")
const addbutton = document.getElementById("addButton")
const ul = document.getElementById("taskList");


addbutton.addEventListener("click",()=>{
    const value = userinput.value;
   const li =  document.createElement("li")
   li.innerText = value;

const delbutton =  document.createElement("button")
delbutton.innerText = 'Delete';
li.appendChild(delbutton)
delbutton.addEventListener("click",()=>{
    li.remove()
})

   ul.appendChild(li)
   userinput.value=''

   
})


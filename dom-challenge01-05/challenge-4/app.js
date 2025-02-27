/**
 * Write your challenge solution here
 */
const userinput = document.getElementById("taskInput")
const addbutton = document.getElementById("addButton")
const ul = document.getElementById("taskList");
const totaltask = document.getElementById("totalTasks")


addbutton.addEventListener("click",()=>{
    const value = userinput.value;
   const li =  document.createElement("li")
   li.innerText = value;
   const lilen = li.length;
   totaltask.innerText = lilen
   console.log(lilen)

const delbutton =  document.createElement("button")
delbutton.innerText = 'Delete';
li.appendChild(delbutton)
delbutton.addEventListener("click",()=>{
    li.remove()

})
const checkbox = document.createElement("input")
checkbox.type = "checkbox";

   ul.appendChild(checkbox)
   ul.appendChild(li)
   userinput.value=''

   
})



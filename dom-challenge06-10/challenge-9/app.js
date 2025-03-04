/**
 * Write your challenge solution here
 */

   const openbtn = document.querySelector(".toggle-btn")
   const closebtn = document.querySelector(".close-btn")
   const panel = document.querySelector(".panel")
   const items = document.querySelectorAll(".menu-item")
   

   openbtn.addEventListener("click",openmenu);
   closebtn.addEventListener("click",closemenu);

   function openmenu(){
    panel.classList.add("active");
   }

   function closemenu(){
    panel.classList.remove("active")
   }




  
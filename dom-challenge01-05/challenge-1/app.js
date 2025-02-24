/**
 * Write your challenge solution here
 */
//function changebacground(color){
  //  document.body.style.background = color;
//}

const theamsweatch = document.getElementById('toggleButton');
//console.log(theamsweetch)
const theamstastus = document.getElementById('status');
theamsweatch.addEventListener('click',()=>{
const currentcolor = document.body.style.background;
if(!currentcolor || currentcolor === "white"){
    document.body.style.background = 'black'
    theamsweatch.innerText="Turn Off"
    theamstastus.innerHTML = "Dark mode"
    document.body.style.color ="white"
}else{
   document.body.style.background = 'white'
   theamsweatch.innerText="Turn On"
   theamstastus.innerHTML = "Light mode"
   document.body.style.color ="black"
}
})



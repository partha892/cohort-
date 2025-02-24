/**
 * Write your challenge solution here
 */
const nameinput = document.getElementById("nameInput")
const jobinput = document.getElementById("jobInput")
const ageinput = document.getElementById("ageInput")
const bioinput = document.getElementById("bioInput")

//console.log(nameinput.value)
const namedis = document.getElementById("nameDisplay")
const jobdis = document.getElementById("jobDisplay")

const agedis = document.getElementById("ageDisplay")

const biodis = document.getElementById("bioDisplay")

nameinput.addEventListener("input",function(){
    namedis.innerText = this.value;
})
jobinput.addEventListener("input",function(){
    jobdis.innerText = this.value;
})
ageinput.addEventListener("input",function(){
    agedis.innerText = this.value;
})
bioinput.addEventListener("input",function(){
    biodis.innerText = this.value;
})


/**
 * Write your challenge solution here
 */
const changethecolor = document.getElementById('mainHeading')
const redbutton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const purpleButton = document.getElementById('purpleButton');
const resetButton = document.getElementById('resetButton');

redbutton.addEventListener('click',function(){
    changethecolor.style.color ="Red"
})
greenButton.addEventListener('click',function(){
    changethecolor.style.color ="green"
})
blueButton.addEventListener('click',function(){
    changethecolor.style.color ="blue"
})
purpleButton.addEventListener('click',function(){
    changethecolor.style.color ="purple"
})
resetButton.addEventListener('click',function(){
    changethecolor.style.color ="black"
})


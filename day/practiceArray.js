let Tea =["lemon tea","chocklet tea","Rum tea","Milk tea","black tea"]
Tea.push("chamomile tea")
console.log(Tea)
const index = Tea.indexOf("chocklet tea")
if(index > -1){
Tea.splice(index,1);
}
console.log(Tea)
const alcoholtea = Tea.filter((teas)=>teas!=="Rum tea")
console.log(alcoholtea)
let testSort =["ram","partha","bhukta","path"]
console.log(testSort.sort())
let upcash = []
for(let i =0;i<testSort.length;i++){
    console.log(testSort[i])
     upcash.push(testSort[i].toUpperCase())
}
console.log(upcash)

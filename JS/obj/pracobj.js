let parthaExp = {
    college : "gist",
    firstjob :{
companyName :"patel g tech llp",
startDate : "01.04.2024",
endDate :"31 aug 2024",
dutty :"junior asosiate xml and html"
    } ,
    presentJob :"8lpa"
}
//console.log(parthaExp)


let name = "partha";
let mee = name;
mee = "bhukta"
//console.log(name,mee)

let myname={
    fname  :"partha",
}
let memyname = myname;
memyname.fname = "bhukta "

console.log(memyname,myname)
 memyname ={
    ...myname
}
memyname.fname="prartim"
console.log(memyname,myname)

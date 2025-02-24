let PiyushGargGfList =["Anjali", "Priya", "Ritika"]
console.log(PiyushGargGfList)
//[ 'Anjali', 'Priya', 'Ritika' ]


//push()
PiyushGargGfList.push("anu")

console.log(PiyushGargGfList)
//[ 'Anjali', 'Priya', 'Ritika', 'anu' ]

//pop()
PiyushGargGfList.pop()
console.log(PiyushGargGfList)
//[ 'Anjali', 'Priya', 'Ritika' ]
PiyushGargGfList.pop()
console.log(PiyushGargGfList)
//[ 'Anjali', 'Priya' ]


//unshift()
PiyushGargGfList.unshift("rima","sritama")
console.log(PiyushGargGfList)
//[ 'rima', 'sritama', 'Anjali', 'Priya' ]


//lenth()
let numberOfGf = PiyushGargGfList.length
console.log(numberOfGf)
//4

//shift()
const cheatgirl = PiyushGargGfList.shift()
console.log(PiyushGargGfList)
//[ 'sritama', 'Anjali', 'Priya' ]
console.log(cheatgirl)
//rima


//short()
PiyushGargGfList.sort();  

console.log(PiyushGargGfList);
//[ 'Anjali', 'Priya', 'sritama' ]

//filter()
const filtered = PiyushGargGfList.filter((word) => word.length === 6);

console.log(filtered);
//[ 'Anjali' ]


//slice()
let slicelist = PiyushGargGfList.slice(-2)
console.log(PiyushGargGfList)
//[ 'Anjali', 'Priya', 'sritama' ]
console.log(slicelist)
//[ 'Priya', 'sritama' ]


//toSorted()
let Everyday = slicelist.toSorted()
console.log(Everyday)
//[ 'Priya', 'sritama' ]

//join()
let allbreackup = Everyday.join("💔")
console.log(allbreackup)
//Priya💔sritama
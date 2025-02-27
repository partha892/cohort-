if (true) {
    var blockVar = "I am not block scoped";
}
console.log(blockVar); // Output: I am not block scoped



var name = "Partha";   // Function-scoped
let age = 20;          // Block-scoped
const country = "India"; // Cannot be reassigned

let myName = "Partha"; // String
let myAge = 24; // Number
let isDeveloper = true; // Boolean
let nothing; // Undefined
let emptyValue = null; // Null
let bigNumber = 9007199254740991n; // BigInt
let uniqueId = Symbol("id"); // Symbol


let person = { name: "Partha", age: 24 }; // Object
let skills = ["HTML", "CSS", "JavaScript"]; // Array
function greet() { console.log("Hello, World!"); } // Function


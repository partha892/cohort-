const Person = { 
    First_Name: "partha", 
    Second_Name: "pratim", 
    Address: { 
        City: "kolkata", 
        State: "West Bengal", 
        Country: "India", 
    } 
}; 

// Serialization 
const SerializedForm = JSON.stringify(Person);

// Output 
console.log(SerializedForm);
/*
Correct Output:
{"First_Name":"partha","Second_Name":"pratim","Address":{"City":"kolkata","State":"West Bengal","Country":"India"}}
*/

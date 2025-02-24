function checktruthyValue(value) { 
    if (value) { 
    console.log("Truthy"); 
    } else { 
    console.log("Falsy"); 
    } 
    } 
    checktruthyValue(1) 
    checktruthyValue(0) 
    checktruthyValue("partha") 
    checktruthyValue("") 
    checktruthyValue([])
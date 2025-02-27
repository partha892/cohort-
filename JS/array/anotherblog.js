const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple

const numbers = new Array(10, 20, 30);
console.log(numbers[1]); // Output: 20


const arr = ["A", "B", "C", "D"];

console.log(arr[2]); // Output: C
arr[1] = "Z"; // Modifying value at index 1
console.log(arr); // Output: ["A", "Z", "C", "D"]


fruits.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
  });

  /*Index 0: Apple
Index 1: Banana
Index 2: Mango*/


const upperCaseArr = fruits.map(item => item.toUpperCase());
console.log(upperCaseArr);
//[ 'APPLE', 'BANANA', 'MANGO' ]



  

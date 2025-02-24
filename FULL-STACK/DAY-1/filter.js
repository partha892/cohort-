const products = [
    { name: "Laptop", stock: 10 },
    { name: "Smartphone", stock: 25 },
    { name: "Headphones", stock: 15 },
    { name: "Keyboard", stock: 30 },
    { name: "Mouse", stock: 20 }
  ];
  
  
  let lowstock = products.filter((item)=>{
return item.stock < 20;
  })
  console.log(lowstock)
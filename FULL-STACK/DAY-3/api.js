const adddiv = document.getElementById("product-container")
fetch("https://api.freeapi.app/api/v1/public/randomproducts")
.then((res)=>res.json())
.then((obj)=>{
  //console.log(obj)
  const products = obj.data.data

  
  //console.log(product)
  products.forEach(product => {
    
    const list = document.createElement("li")
    list.innerText = product.title;
    adddiv.appendChild(list)

  });
})
.catch((e)=>console.log(`api calling error ${e}`))
   

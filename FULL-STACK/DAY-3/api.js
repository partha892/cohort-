fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then(res => res.json()) // Convert response to JSON
  .then(data => console.log(data.title)) // Log the JSON data
  .catch(error => console.error("Error fetching data:", error)); // Handle errors

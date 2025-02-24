const products = [
    { name: "Wireless Mouse", description: "Ergonomic wireless mouse with 2.4GHz connectivity.", price: 19.99 },
    { name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard with blue switches.", price: 49.99 },
    { name: "Bluetooth Headphones", description: "Noise-canceling over-ear Bluetooth headphones.", price: 79.99 },
    { name: "Smartwatch", description: "Water-resistant smartwatch with heart rate monitoring.", price: 99.99 },
    { name: "Gaming Chair", description: "Adjustable ergonomic gaming chair with lumbar support.", price: 149.99 },
    { name: "USB-C Hub", description: "7-in-1 USB-C hub with HDMI and multiple USB ports.", price: 29.99 },
    { name: "Portable SSD", description: "1TB USB 3.1 portable SSD for fast data transfer.", price: 89.99 },
    { name: "Smartphone Stand", description: "Adjustable aluminum stand for smartphones and tablets.", price: 14.99 },
    { name: "Webcam", description: "1080p HD webcam with built-in microphone.", price: 39.99 },
    { name: "Wireless Charger", description: "Fast wireless charging pad for smartphones.", price: 24.99 }
  ];
  let totalprice = products.reduce((acc , sale) => acc + sale.price,0)
  
  console.log(totalprice);
  
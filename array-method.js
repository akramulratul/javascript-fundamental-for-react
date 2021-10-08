const products = [
  { name: "laptop", price: 10000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 5000, brand: "Samsung", color: "red" },
  { name: "Tab", price: 1800, brand: "Apple", color: "yellow" },
  { name: "Mobile", price: 8000, brand: "Xiomi", color: "green" },
  { name: "Fredge", price: 17000, brand: "Walton", color: "magenda" },
];

const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);
products.forEach((product) => console.log(product.color));

//3. Filter
//Filter will return array...........

const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

/// Filter a name
const specificName = products.filter((p) => p.name.includes("n"));
console.log(specificName);
// containing

//4.find
// where find at first then show it
const special = products.find((p) => p.name.includes("n"));
console.log(special);

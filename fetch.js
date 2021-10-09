//1.JSON
const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["king Khan", "Dhakar Mastan"],
};
//object notation
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//for convert JSON file to normal javascript file
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//2. fetch
// fetch("url");
// .then(res=>res.json());
// .then(data=>console.log(data));

//3. keys,values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//for of on array like object
//loop on an object using for in

//add or remove from an array
const products = [
  { name: "laptop", price: 10000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 5000, brand: "Samsung", color: "red" },
  { name: "Tab", price: 1800, brand: "Apple", color: "yellow" },
  { name: "Mobile", price: 8000, brand: "Xiomi", color: "green" },
  { name: "Fredge", price: 17000, brand: "Walton", color: "magenda" },
];

const newProduct = { name: "webcam", price: 700, brand: "lal" };

//copy products array and then add newProduct
const newProducts = [...products, newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter((p) => p.name !== "phone");
console.log(remaining);

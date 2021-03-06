//1.array destructuring
const numbers = [42, 65];
// const x = numbers[0];

const [x, y] = [42, 65];

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = [90, 34];
// console.log(boxify(90, 34));

const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["king Khan", "Dhakar Mastan"],
};

const [firstMovie, secondMovie] = student.movies;

//object destructuring function
const { name, age } = { name: "alu", age: 14, price: 100 };

const employee = {
  name: "VS Code",
  designation: "developer",
  machine: "mac",
  language: ["html", "css", "Js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: { color: "black", price: 500, brand: "garmin" },
  },
};
const { machine, ide } = employee;
const { brand } = employee?.specification?.watch;
const { weight, address } = employee.specification;
console.log(employee.specification);

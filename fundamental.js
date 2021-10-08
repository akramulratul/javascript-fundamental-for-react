// how to declare a variable using let and const
//let can be change so used const
const fatherName = "anamul";
//variable change we used let
let season = "winter";

//6 basic condition change we used let  >,<,===,!==,<=,<=
//mulktiple condition: &&,||
if (fatherName === "anamul" || season === "rainy") {
} else if (fatherName === "anamul") {
} else {
}

// array
//used in third bracket
//index,
//length,push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//5.function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(5, 4);
console.log(output);

//6. Object
//3 ways to access property by name
const student = {
  name: "Sakib",
  age: 32,
  movies: ["king Khan", "Dhakar Mastan"],
};
const myVariable = "age";
console.log(student.age); //direct by property
console.log(student["age"]); //access via property name in a variable
console.log(student[myVariable]); //access via property name in a variable

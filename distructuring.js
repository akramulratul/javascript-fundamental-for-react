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

const student={
    name:'Sakib Khan',
    age=32,
    movies:['king Khan','Dhakar Mastan']
}

const [firstMovie,secondMovie] = student.movies;
console.log();

const num_one = document.querySelector('input[name="num_one"]');
const num_two = document.querySelector('input[name="num_two"]');
const add = document.querySelector("button#add");
const sub = document.querySelector("button#sub");
const mult = document.querySelector("button#mult");
const div = document.querySelector("button#div");

num_one.addEventListener("change", numOne);
num_two.addEventListener("change", numTwo);

let num_one_value;
let num_two_value;

function numOne(e) {
  num_one_value = Number(e.target.value);
}
function numTwo(e) {
  num_two_value = Number(e.target.value);
}

add.addEventListener("click", addition);
function addition() {
  let result = num_one_value + num_two_value;
  alert('Your result of ' + num_one_value + ' and ' + num_two_value + ' is ' + result);
  num_one.value = '';
  num_two.value = '';
//   alert(`Your result of ${num_one_value} and ${num_two_value} is ${result}`)
}

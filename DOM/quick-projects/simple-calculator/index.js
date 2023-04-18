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
function trigerforall() {
  alert ("")
}



let total = alert()
add.addEventListener("click", addition);
function addition() {
  let result = num_one_value + num_two_value;
  alert('Your result of ' + num_one_value + ' and ' + num_two_value + ' is ' + result);
  num_one.value = '';
  num_two.value = '';
//   alert(`Your result of ${num_one_value} and ${num_two_value} is ${result}`)
}
sub.addEventListener("click", subtraction);
function subtraction() {
  let sub_result = num_one_value - num_two_value;
  alert('your result for sub ' + num_one_value + ' and ' + num_two_value + ' is ' + sub_result);
    num_one.value = '';
  num_two.value = '';
}
mult.addEventListener("click", multiplication);
function multiplication() {
  let mult_result = num_one_value * num_two_value;
  alert('your result for mult ' + num_one_value + ' and ' + num_two_value + ' is ' + mult_result);
  num_one.value = '';
  num_two.value = '';
}
div.addEventListener("click", division);
function division() {
  let div_result = num_one_value / num_two_value;
  alert('your result for div ' + num_one_value + ' and ' + num_two_value + ' is ' + div_result);
  num_one.value = '';
  num_two.value = '';
}
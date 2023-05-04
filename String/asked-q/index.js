let text = " I am just learning javascript and javascript."

let find_word = text.lastIndexOf("javascript")
let replaced_value = text.slice(find_word).replace("javascript", "nodejs")
let new_statement = text.substring(0, find_word) + replaced_value;

console.log(new_statement);
let addTask = document.getElementById("task");
let close = document.getElementById("close");
let form = document.getElementById("form");
let text = document.querySelector("#text > input");
let date = document.getElementById("date");
let checkbox = document.getElementById("checkbox");
let save = document.getElementById("save");
let head = document.getElementById("head");
let h1 = document.getElementById("h1");
let todoForm = document.getElementById("todo-form");
let list = document.getElementById("list");

// toggling the add and close button
function view(event){
    addTask.remove("task");
    close.classList.add("red");
    //  form.appendChild("form");
    
}
function closing(event){
    close.remove("close");
    addTask.classList.add("green2"); 
    form.remove("form");
}



function addTodo(){
    console.log(text.value)
    if(text.value === ""){
        alert("input a todo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);
    }
}
// let todoValue = "";
// let todoDate = "" ;
// let todoContent = [];

// text.addEventListener("change", (e) => {
//     todoValue = e.target.value;
// });
// form.addEventListener("submit", (e) => {
//      e.preventDefault();
//      getTodo();
// });

// todoContent.push(todoValue);

// const getTodo = () =>{
// let todos.HTML ="";
// todoContent.forEach(function (value) {
//     todosHTML += `<li>${value}</li>`;
// });
// list.innerHTML = todosHTML;
// };
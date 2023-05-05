// getting elements
const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const todoContainer = document.querySelector("ul");

// Creating a variable to store todo and todos
let todoContent = "";
let todos = [];
// let todo = {
//   id: new Date().getTime(),
//   content: "",
//   completed: false,
// };

// adding Eventlistener
input.addEventListener("change", (event) => {
  todoContent = event.target.value;
  //   todo.content = event.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createTodo();
  getAllTodo();
});

// Create Todo
const createTodo = function () {
  if (todoContent.trim() == "") {
    alert("Please enter a todo before submitting the form");
    return;
  }
  //   if (todo.content.trim() == "") {
  //     alert("Please enter a todo before submitting the form");
  //     return;
  //   }
  todos.push(todoContent);
  //   todos.push(todo);
  input.value = "";
  //   todo = {
  //     id: new Date().getTime(),
  //     content: "",
  //     completed: false,
  //   };
};

// Getting all todo
const getAllTodo = () => {
  let todoHTML = "";
  todos.forEach(function (value) {
    todoHTML += `<li>${value}</li>`;
    // todoHTML += `<li id='${value.id}' class="${
    //   value.completed ? "completed" :''
    // }">${value.content}</li>`;
  });
  todoContainer.innerHTML = todoHTML;

  // adding eventlistener to all the li
  //   const lists = document.querySelectorAll("li");
  //   lists.forEach((list) => {
  //     list.addEventListener("dblclick", () => deleteTodoCompletion(list.id));
  //     list.addEventListener("click", () => togglingTodoCompletion(list.id));
  //   });
};

// todo
// Set todo to completed and delete

// Deleting a todo
const deleteTodoCompletion = (todoId) => {
  const areYouSure = confirm("Are you sure?");
  if (areYouSure) {
    todos = todos.filter((todo) => todo.id != todoId);
    getAllTodo();
  }
};

// Toggling todo completion
const togglingTodoCompletion = (todoId) => {
  if (confirm("Are you sure?")) {
    todos.forEach((todo) => {
      if (todo.id == todoId) {
        todo.completed = !todo.completed;
      }
    });
    getAllTodo();
  }
};

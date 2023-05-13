let inputText = document.getElementById("text");
let inputDate = document.getElementById("date");
let save = document.getElementById("save");
let form = document.querySelector("form");
let listContainer = document.querySelector("ul");
let task = document.getElementById("task");
let close = document.getElementById("close");
let deleted = document.getElementsByClassName("delete");
let list = document.getElementsByClassName("lists");

// const list = document.querySelector("li");

console.log(list);
// open and close button
function add() {
  task.style.display = "none";
  close.style.display = "block";
  form.style.display = "block";
}

function closing() {
  close.style.display = "none";
  task.style.display = "block";
  form.style.display = "none";
}

// setting the values
let listArr = [];
let todoContent = {
  id: 0,
  todoText: "",
  todoDate: "",
};

inputText.addEventListener("change", function (event) {
  todoContent.todoText = event.target.value;
  console.log(todoContent);
});

inputDate.addEventListener("change", function (event) {
  todoContent.todoDate = event.target.value;
  console.log(todoContent);
});

form.addEventListener("submit", function (event) {
  todoContent.id = Math.floor(Math.random() * 110000);
  event.preventDefault();
  listArr.push(todoContent);

  // resetting the values
  // you reset the value so the new value wont override the previous values
  todoContent = {
    todoText: "",
    todoDate: "",
  };
  inputText.value = "";
  inputDate.value = "";
  getList();
});

function getList() {
  let listContent = "";
  listArr.forEach(function (value) {
    listContent += `<li class = "lists">
                        <p>
                            ${value.todoText} <br/>
                            <span>${value.todoDate}</span>
                        <p/>
                        <button class="delete" onclick="deleteTask(list)">Delete<button/>
                    </li>`;
  });
  listContainer.innerHTML = listContent;
}

let deleteTask = (list) => {
  if (confirm("Are you sure?")) {
    //   listArr = listArr.filter((list) => {
    //     return list.id != id;
    //   });

    listArr.splice(listArr.indexOf(list), 1);
    getList();
  }
};


list.addEventListener("click", function(e){
  if(e.target.tagname === "li"){
    e.target.classList.toggle("color");
  };
  getList();
 console.log(li);
});


// listArr.forEach((listed) => {

//   listed.addEventListener("dblclick", () => todoCompletion(list.id));
// });

getList();
// todo completeion
// const todoCompletion = (list) =>{
//   if (confirm ("Are you sure?")){
//     listArr.forEach((todo) => {
      // if (list.id == list) {
      //   todo.completed = !list.completed;
      // }
//       todo.style.background = "yellow";
//     });
//     getList();
//   }
// };

// for the delete button
/* <button class="delete" onclick="deleteTask('${value}')">Delete<button/> */

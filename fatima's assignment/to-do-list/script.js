let inputText = document.getElementById("text");
let inputDate = document.getElementById("date");
let save = document.getElementById("save");
let form = document.querySelector("form");
let listContainer = document.querySelector("ul");
let deleted = document.getElementsByClassName("delete");

// setting the values
let listArr = [];
let todoContent = {
    todoText :"",
    todoDate :"",
};

inputText.addEventListener("change", function (event){
 todoContent.todoText = event.target.value;
 console.log(todoContent)
});

inputDate.addEventListener("change", function (event){
    todoContent.todoDate = event.target.value;
    console.log(todoContent)
   });
  

form.addEventListener("submit", function(event){
 event.preventDefault();
 listArr.push(todoContent);


// resetting the values
todoContent = {
    todoText :"",
    todoDate :"",
};
inputText.value = "";
inputDate.value = "";

let listContent = "";
listArr.forEach(function (value) {
    listContent += `<li>
                    <p>
                    ${value.todoText} <br/>
                    <span>${value.todoDate}</span>
                    <p/>
                    <button class="delete">Delete<button/>
                    
                </li>`;
});
listContainer.innerHTML = listContent;
});

// deleted.addEventListener("click", function(event){
//      event.listContainer.removeChild(listContent);
// });

// const deleteTodo= (todoList) => {
//     const areYouSure = confirm("Are you sure?");
//     if (areYouSure) {
//       listArr = listArr.filter((todo) => todoContent != todoList);
//       getAllTodo();
//     }
//   };

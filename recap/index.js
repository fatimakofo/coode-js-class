// getting html
const form = document.getElementById("form");
const textInput = document.querySelector("#form input:nth-child(1)");
const dateInput = document.querySelector("#form input:nth-child(2)");
const listContainer = document.querySelector("ul");

// writing logic
// create a single list object
//const singleLists = JSON.parse(localStorage.getItem("lists")) == null ? [] :JSON.parse(localStorage.getItem("lists")) ;
const singleLists = JSON.parse(sessionStorage.getItem("lists")) ?? [];
let singleList = {
  text: "",
  date: "",
};

// add event listener to form, inputs

textInput.addEventListener("change", function (event) {
  singleList.text = event.target.value;
});
dateInput.addEventListener("change", function (event) {
  singleList.date = event.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (singleList.text.trim() == "") return;
  singleLists.push(singleList);
  sessionStorage.setItem("lists", JSON.stringify(singleLists));
  // Resetting
  singleList = {
    text: "",
    date: "",
  };
  textInput.value = "";
  dateInput.value = "";

  getAllLists();
});

function getAllLists() {
  // Outputting singleList into an html element
  console.log(singleLists)
  let listHtml = "";
  singleLists.forEach(function (value) {
    listHtml += `<li>
                      ${value.text}
                      <span style="background-color: red">${value.date}</span>.
                  </li>`;
  });
  listContainer.innerHTML = listHtml;
}


window.addEventListener("DOMContentLoaded", getAllLists);
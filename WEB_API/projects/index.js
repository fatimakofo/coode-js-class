// variables
const productsContainer = document.querySelector("#products-container");

// getting all products

function getAllProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const products = data.products;
      let productHtml = "";
      products.forEach((product) => {
        // console.log(product);
        productHtml += `<div class="col-12 col-sm-4">
            <div class="card w-100">
              <img src="${product.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary">$${product.price}</a>
              </div>
            </div>
          </div>`;
      });
      if (productsContainer != undefined) {
        productsContainer.innerHTML = productHtml;
      }
    });
}

// Creating a product
let form = document.querySelector("form#add-product");
const titleInput = document.querySelector("input#title");
const priceInput = document.querySelector("input#price");
const descriptionInput = document.querySelector("textarea#description");
const imageUrlInput = document.querySelector("input#productImage");

// creating object for product

const product = {
  title: "",
  price: "",
  description: "",
  imageURL: "",
};

titleInput?.addEventListener("change", (event) => {
  product.title = event.target.value;
});
priceInput?.addEventListener("change", (event) => {
  product.price = event.target.value;
});
descriptionInput?.addEventListener("change", (event) => {
  product.description = event.target.value;
});
imageUrlInput?.addEventListener("change", (event) => {
  product.imageURL = event.target.value;
});

form?.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    console.log(product);

    // sending request to an api
    console.log("sending request");
    const response = await fetch("https://dummyjson.com/products/add", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
      method: "POST",
    });
    console.log("Getting response");
    const data = await response.json();

    // checking if the response is ok
    if (response.ok) {
      window.alert("Products added successfully");
      window.location.href = "products.html";
    }
    console.log(data);
    console.log("Form Submitted");
  } catch (error) {
    console.log(error);
  }
});

// authenticating a user
form = document.querySelector("form#auth");
const usernameInput = document.querySelector("input#username");
const passwordInput = document.querySelector("input#password");

// creating a user object
const user = {
  username: "",
  password: "",
};

usernameInput?.addEventListener("change", function (event) {
  user.username = event.target.value;
});
passwordInput?.addEventListener("change", function (event) {
  user.password = event.target.value;
});

form?.addEventListener("submit", async function (event) {
  try {
    event.preventDefault();

    // sending a request to log user in
    const response = await fetch("https://dummyjson.com/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      method: "POST",
    });
    // getting response
    console.log(response);
    const output = await response.json();
    if (response.ok || response.status == 200) {
      window.localStorage.setItem("user", JSON.stringify(output));
      window.location.replace("pages/products.html");
    }
    console.log(output);
  } catch (error) {
    console.log(error);
  }
});

// check if user is login
function checkAuthUser() {
  const user = window.localStorage.getItem("user");
  if (user != null || user != undefined) {
    return JSON.parse(user);
  } else {
    if(window.location.pathname.includes("index.html")) return;
    window.location.replace("../index.html");
  }
}

// navigate and output user avatar
function getAuthUser(){
    const user = checkAuthUser();
    const avatar = user?.username?.slice(0,1);
    if(document.querySelector('h3[avatar]') != undefined){
      document.querySelector('h3[avatar]').innerHTML = avatar;
    }
}


// logout auth user
document.querySelector('button#logout')?.addEventListener('click',()=>{
    window.localStorage.clear();
    window.location.replace('../index.html');
})
window.addEventListener("DOMContentLoaded", () => {
  getAllProducts();
  getAuthUser();
});

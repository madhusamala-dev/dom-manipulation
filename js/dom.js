console.log("Hello World !");
/*
//const h1Element = document.getElementById("heading");
//const h1Element = document.getElementsByTagName("h1");
const h1Element = document.getElementsByClassName("heading");
console.log("H1 Element : ", h1Element);
h1Element[0].innerText = "Cara E-Commerce";
h1Element[1].innerText =
  "Experience true online shopping with Cara E-Commerce, where convenience meets quality. Explore a wide range of products, enjoy seamless navigation, and discover unbeatable deals. Shop with confidence and elevate your online shopping experience today!";
h1Element[1].style.fontSize = "20px";
h1Element[1].style.fontWeight = "400";
h1Element[1].style.color = "#555";
*/
/*
querySelector
querySelectorAll
*/
const h1Element = document.querySelectorAll(".heading");
console.log("H1 Element : ", h1Element);
h1Element[0].innerText = "Cara E-Commerce";
h1Element[1].innerText =
  "Experience true online shopping with Cara E-Commerce, where convenience meets quality. Explore a wide range of products, enjoy seamless navigation, and discover unbeatable deals. Shop with confidence and elevate your online shopping experience today!";
h1Element[1].style.fontSize = "20px";
h1Element[1].style.fontWeight = "400";
h1Element[1].style.color = "#555";

const cardContainer = document.querySelector("#card-container");
cardContainer.innerHTML = `<div class="card">
  <img src="images/products/f1.jpg" alt="Product Image" />
  <h2>Product Title</h2>
    <p>Product description goes here. It provides details about the product.</p>
    <button class='btn btn-primary'>Buy Now</button>
</div>`;

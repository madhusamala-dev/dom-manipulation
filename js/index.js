console.log("index.js is loaded !");
// these products will be coming from backend in real world application,
// but for now we are hardcoding it here in frontend

const products = [
  {
    id: 1,
    name: "Casual Cotton Shirt",
    brand: "Adidas",
    price: 1200,
    rating: 4.5,
    image: "images/products/f1.jpg",
  },

  {
    id: 2,
    name: "Slim Fit Shirt",
    brand: "Nike",
    price: 1500,
    rating: 4.2,
    image: "images/products/f2.jpg",
  },

  {
    id: 3,
    name: "Printed Summer Shirt",
    brand: "Puma",
    price: 1800,
    rating: 4.7,
    image: "images/products/f3.jpg",
  },

  {
    id: 4,
    name: "Formal Office Shirt",
    brand: "Levis",
    price: 2200,
    rating: 4.4,
    image: "images/products/f4.jpg",
  },
  {
    id: 5,
    name: "Checked Casual Shirt",
    brand: "Adidas",
    price: 1700,
    rating: 4.6,
    image: "images/products/f5.jpg",
  },

  {
    id: 6,
    name: "Oversized T-Shirt",
    brand: "Nike",
    price: 1400,
    rating: 4.1,
    image: "images/products/f6.jpg",
  },

  {
    id: 7,
    name: "Classic White Shirt",
    brand: "Peter England",
    price: 2100,
    rating: 4.8,
    image: "images/products/f7.jpg",
  },

  {
    id: 8,
    name: "Denim Casual Shirt",
    brand: "Wrangler",
    price: 2500,
    rating: 4.3,
    image: "images/products/f8.jpg",
  },
];

//display user section and admin section programmatically

const homeLink = document.querySelectorAll(".home-link");
const adminLink = document.querySelector("#admin-link");
const userSection = document.querySelector("#user-section");
const adminSection = document.querySelector("#admin-section");
const productsTableBody = document.querySelector("#products-table-body");
const productsContainer = document.querySelector("#products-container");
const productsCount = document.querySelector("#productsCount");

homeLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    //alert("Home link is clicked !");
    adminSection.style.display = "none";
    userSection.style.display = "block";
  });
});

adminLink.addEventListener("click", (event) => {
  event.preventDefault();
  //alert("Admin link is clicked !");
  adminSection.style.display = "block";
  userSection.style.display = "none";
  displayAdminPage();
});

//product container element

function displayProductsInProductsTable() {
  productsCount.textContent = products.length;
  let productsTableData = "";
  products.forEach((product) => {
    productsTableData += `            

      <tr>

        <td>
          ${product.id}
        </td>

        <td>

          <img 
            src="${product.image}"
            width="70"
            height="70"
            class="rounded object-fit-cover">

        </td>

        <td>
          ${product.name}
        </td>

        <td>
          ${product.brand}
        </td>

        <td class="text-success fw-bold">
          $${product.price}
        </td>

        <td>
          ⭐ ${product.rating}
        </td>

        <td>

          <!-- Update Button -->

          <button 
            class="btn btn-warning btn-sm">

            <i class="fa-solid fa-pen"></i>

          </button>

          <!-- Delete Button -->

          <button 
            class="btn btn-danger btn-sm ms-2">

            <i class="fa-solid fa-trash"></i>

          </button>

        </td>

      </tr>

    `;
  });
  console.log("table data : ", productsTableData);
  productsTableBody.innerHTML = productsTableData;
}

function displayAdminPage() {
  displayProductsInProductsTable();
}
function displayUserPage() {
  adminSection.style.display = "none";
  userSection.style.display = "block";
  displayProducts();
}
function displayProducts() {
  let productsHtmlData = "";

  products.forEach((product) => {
    productsHtmlData += `

<div class="col-sm-6 col-md-4 col-lg-3 ">

                <div class="card h-100 shadow-sm product-card">

                    <img src="${product.image}" class="card-img-top">

                    <div class="card-body">

                        <span class="text-muted">
                            ${product.brand}
                        </span>

                        <h5 class="card-title">
                            ${product.name}
                        </h5>

                        <div class="text-warning">

                            <i class="fa-solid fa-star"></i> <span>${product.rating}</span>
                            

                        </div>

                        <div class="d-flex justify-content-between align-items-center mt-3">

                            <h5 class="text-success">
                                $${product.price}
                            </h5>

                            <button class="btn btn-success">

                                <i class="fa-solid fa-cart-shopping"></i>

                            </button>

                        </div>

                    </div>

                </div>
            </div>`;
  });
  //console.log("product container html data ", productsHtmlData);

  productsContainer.innerHTML = productsHtmlData;
}

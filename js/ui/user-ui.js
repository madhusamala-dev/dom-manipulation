const productsContainer = document.querySelector("#products-container");

function displayProducts() {
  let productsHtmlData = "";

  getProducts().forEach((product) => {
    productsHtmlData += `

        <div class="col-sm-6 col-md-4 col-lg-3">

            <div class="card h-100 shadow-sm product-card">

                <img src="${product.image}"
                     class="card-img-top">

                <div class="card-body">

                    <span class="text-muted">

                        ${product.brand}

                    </span>

                    <h5 class="card-title">

                        ${product.name}

                    </h5>

                    <div class="text-warning">

                        ⭐ ${product.rating}

                    </div>

                    <div class="d-flex justify-content-between mt-3">

                        <h5 class="text-success">

                            $${product.price}

                        </h5>

                        <button class="btn btn-success">

                            <i class="fa-solid fa-cart-shopping"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;
  });

  productsContainer.innerHTML = productsHtmlData;
}

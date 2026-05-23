// Product Form
const form = document.getElementById("product-form");

// Setup Validation Events
for (let field in validationRules) {
  const inputElement = document.getElementById(field);

  inputElement.addEventListener("blur", () => {
    validateInput(field);

    validateForm();
  });
}

// Submit Product
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const product = {
    id: generateProductId(),

    name: document.getElementById("name").value,

    brand: document.getElementById("brand").value,

    price: document.getElementById("price").value,

    rating: document.getElementById("rating").value,

    image: document.getElementById("image").value,
  };

  saveProduct(product);

  displayProducts();

  displayProductsInProductsTable();

  form.reset();

  document.getElementById("submit-btn").disabled = true;
});

function handleDeleteProduct(productId) {
  const isConfirmed = confirm("Are you sure to delete product ?");

  if (!isConfirmed) {
    return;
  }

  deleteProduct(productId);

  displayProducts();

  displayProductsInProductsTable();
}

function openUpdateModal(productId) {
  const product = getProductById(productId);

  document.getElementById("update-id").value = product.id;

  document.getElementById("update-name").value = product.name;

  document.getElementById("update-brand").value = product.brand;

  document.getElementById("update-price").value = product.price;

  document.getElementById("update-rating").value = product.rating;

  document.getElementById("update-image").value = product.image;

  const updateModal = new bootstrap.Modal(
    document.getElementById("updateProductModal"),
  );

  updateModal.show();
}

function handleUpdateProduct() {
  const updateButton = document.getElementById("update-product-btn");

  updateButton.addEventListener("click", function () {
    const updatedProduct = {
      id: Number(document.getElementById("update-id").value),

      name: document.getElementById("update-name").value,

      brand: document.getElementById("update-brand").value,

      price: document.getElementById("update-price").value,

      rating: document.getElementById("update-rating").value,

      image: document.getElementById("update-image").value,
    };

    updateProduct(updatedProduct);

    displayProducts();

    displayProductsInProductsTable();

    const modalElement = document.getElementById("updateProductModal");

    const modal = bootstrap.Modal.getInstance(modalElement);

    modal.hide();
  });
}

handleUpdateProduct();

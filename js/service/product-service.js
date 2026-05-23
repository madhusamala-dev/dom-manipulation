//CRUD operations for products
function getProducts() {
  return products;
}

function saveProduct(product) {
  products.push(product);
}

function generateProductId() {
  return products.length + 1;
}
function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function updateProduct(updatedProduct) {
  const productIndex = products.findIndex(
    (product) => product.id === updatedProduct.id,
  );

  if (productIndex !== -1) {
    products[productIndex] = updatedProduct;
  }
}

function deleteProduct(productId) {
  const productIndex = products.findIndex(
    (product) => product.id === productId,
  );

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
  }
}

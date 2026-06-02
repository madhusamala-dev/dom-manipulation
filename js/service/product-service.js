//CRUD operations for products
const BASE_URL = "http://localhost:3000/products";
async function getProducts() {
  //
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Requested Resource Not Found");
    } else if (response.status === 401) {
      throw new Error("Unauthorized Access");
    } else if (response.status === 403) {
      throw new Error("Forbidden Access");
    } else if (response.status === 500) {
      throw new Error("Internal Server Error");
    } else {
      throw new Error("Failed to fetch products, Please try again later");
    }
  }
  return response.json();
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

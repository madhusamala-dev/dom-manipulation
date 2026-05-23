const productsTableBody = document.querySelector("#products-table-body");

const productsCount = document.querySelector("#productsCount");

function displayProductsInProductsTable() {
  productsCount.textContent = getProducts().length;

  let productsTableData = "";

  getProducts().forEach((product) => {
    productsTableData += `

        <tr>

            <td>${product.id}</td>

            <td>

                <img src="${product.image}"
                     width="70"
                     height="70"
                     class="rounded object-fit-cover">

            </td>

            <td>${product.name}</td>

            <td>${product.brand}</td>

            <td class="text-success fw-bold">

                $${product.price}

            </td>

            <td>

                ⭐ ${product.rating}

            </td>

            <td>

                <button class="btn btn-warning btn-sm" onclick="openUpdateModal(${product.id})">

                    <i class="fa-solid fa-pen"></i>

                </button>

                <button class="btn btn-danger btn-sm ms-2" onclick="handleDeleteProduct(${product.id})">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </td>

        </tr>

        `;
  });

  productsTableBody.innerHTML = productsTableData;
}

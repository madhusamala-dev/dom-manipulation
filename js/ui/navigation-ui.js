const homeLinks = document.querySelectorAll(".home-link");

const adminLink = document.querySelector("#adminLink");

const userSection = document.querySelector("#user-section");

const adminSection = document.querySelector("#admin-section");

function showUserSection() {
  adminSection.style.display = "none";

  userSection.style.display = "block";

  displayProducts();
}

function showAdminSection() {
  adminSection.style.display = "block";

  userSection.style.display = "none";

  displayProductsInProductsTable();
}

homeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    showUserSection();
  });
});

adminLink.addEventListener("click", (event) => {
  event.preventDefault();

  showAdminSection();
});

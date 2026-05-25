const productGrid = document.getElementById("productGrid");

function renderProducts() {
  PRODUCTS.forEach((product) => {
    const card = document.createElement("a");
    card.className = "product";
    card.href = product.url;
    card.setAttribute("aria-label", `View ${product.title}`);

    const image = document.createElement("img");
    image.src = product.thumbnail;
    image.alt = product.title;

    const title = document.createElement("span");
    title.className = "product-title";
    title.textContent = product.title;

    const summary = document.createElement("span");
    summary.className = "product-summary";
    summary.textContent = product.summary;

    card.append(image, title, summary);
    productGrid.append(card);
  });
}

renderProducts();

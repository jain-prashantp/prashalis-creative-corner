const CATEGORY_PRODUCTS = {
  stationary: {
    title: "Stationary Products",
    note: "Indicative INR pricing. Final pricing can vary by quantity, theme, and personalization.",
    image: "assets/images/thumbnail.png",
    popular: [
      {
        name: "Personalized Notebook Set",
        title: "Custom name notebook with matching bookmark",
        price: "Rs. 299",
      },
      {
        name: "Birthday Return Gift Kit",
        title: "Notebook, pencil, tag, and themed wrap",
        price: "Rs. 199",
      },
      {
        name: "Desk Planner Pack",
        title: "Weekly planner with sticky memo set",
        price: "Rs. 249",
      },
      {
        name: "Art Label Set",
        title: "Name labels for books, bottles, and files",
        price: "Rs. 149",
      },
    ],
    available: [
      {
        name: "Mini Journal Combo",
        title: "Compact journal with coordinated stationery",
        price: "Rs. 179",
      },
      {
        name: "Pencil Topper Set",
        title: "Decorative toppers for school gifting",
        price: "Rs. 129",
      },
      {
        name: "Handmade Bookmark Pair",
        title: "Two themed bookmarks with name option",
        price: "Rs. 99",
      },
      {
        name: "Theme School Kit",
        title: "Notebook, labels, pencil, and tag set",
        price: "Rs. 349",
      },
      {
        name: "Thank You Tag Pack",
        title: "Custom tags for hampers and return gifts",
        price: "Rs. 119",
      },
      {
        name: "Sticker Sheet Set",
        title: "Printed stickers for books and crafts",
        price: "Rs. 159",
      },
      {
        name: "Exam Pad Cover",
        title: "Personalized cover for writing pads",
        price: "Rs. 229",
      },
      {
        name: "Desk Note Bundle",
        title: "Memo cards, tags, and mini note sheets",
        price: "Rs. 189",
      },
    ],
  },
  toys: {
    title: "Toy Products",
    note: "Indicative INR pricing. Final pricing can vary by size, theme, and customization.",
    image: "assets/images/thumbnail.png",
    popular: [
      {
        name: "Name Plush Toy",
        title: "Soft toy styled with custom name detail",
        price: "Rs. 499",
      },
      {
        name: "Birthday Theme Toy",
        title: "Playful gift matched to party theme",
        price: "Rs. 599",
      },
      {
        name: "Mini Toy Hamper",
        title: "Small toy with tag and gift packing",
        price: "Rs. 349",
      },
      {
        name: "Character Gift Toy",
        title: "Theme-inspired toy for children",
        price: "Rs. 699",
      },
    ],
    available: [
      {
        name: "Soft Rattle Gift",
        title: "Baby-friendly gifting option",
        price: "Rs. 299",
      },
      {
        name: "Toy And Tag Set",
        title: "Toy with personalized name tag",
        price: "Rs. 399",
      },
      {
        name: "Festive Toy Pack",
        title: "Gift-ready toy for festivals",
        price: "Rs. 449",
      },
      {
        name: "School Return Toy",
        title: "Budget toy for return gifting",
        price: "Rs. 199",
      },
      {
        name: "Decor Toy Piece",
        title: "Toy-style accent for room decor",
        price: "Rs. 549",
      },
      {
        name: "Twin Toy Combo",
        title: "Two small toys packed together",
        price: "Rs. 749",
      },
      {
        name: "Custom Color Toy",
        title: "Toy customized around preferred colors",
        price: "Rs. 649",
      },
      {
        name: "Milestone Toy Gift",
        title: "Gift for birthdays and baby milestones",
        price: "Rs. 799",
      },
    ],
  },
  plants: {
    title: "Artificial Plant Products",
    note: "Indicative INR pricing. Final pricing can vary by pot style, size, and arrangement.",
    image: "assets/images/thumbnail.png",
    popular: [
      {
        name: "Mini Desk Plant",
        title: "Compact plant for study or work desks",
        price: "Rs. 249",
      },
      {
        name: "Ceramic Pot Plant",
        title: "Decor plant in a neat ceramic-style pot",
        price: "Rs. 449",
      },
      {
        name: "Shelf Decor Plant",
        title: "Small greenery accent for shelves",
        price: "Rs. 349",
      },
      {
        name: "Gift Plant Arrangement",
        title: "Decor plant with gift-ready styling",
        price: "Rs. 599",
      },
    ],
    available: [
      {
        name: "Succulent Trio",
        title: "Set of three small artificial succulents",
        price: "Rs. 699",
      },
      {
        name: "Table Center Plant",
        title: "Decorative centerpiece for tables",
        price: "Rs. 549",
      },
      {
        name: "Hanging Green Accent",
        title: "Artificial hanging greenery piece",
        price: "Rs. 399",
      },
      {
        name: "Office Desk Combo",
        title: "Two desk plants for office gifting",
        price: "Rs. 799",
      },
      {
        name: "Festival Decor Plant",
        title: "Plant accent styled for festive corners",
        price: "Rs. 499",
      },
      {
        name: "Planter With Quote",
        title: "Decor plant paired with a quote card",
        price: "Rs. 599",
      },
      {
        name: "Small Pot Pair",
        title: "Two matching artificial plant pots",
        price: "Rs. 449",
      },
      {
        name: "Housewarming Plant Gift",
        title: "Plant arrangement for home gifting",
        price: "Rs. 899",
      },
    ],
  },
  gifts: {
    title: "Gift Products",
    note: "Indicative INR pricing. Final pricing can vary by items, packaging, and quantity.",
    image: "assets/images/thumbnail.png",
    popular: [
      {
        name: "Birthday Gift Hamper",
        title: "Curated birthday gift with custom packing",
        price: "Rs. 799",
      },
      {
        name: "Festival Gift Box",
        title: "Celebration box for festive gifting",
        price: "Rs. 999",
      },
      {
        name: "Kids Return Gift Pack",
        title: "Budget-friendly return gift bundle",
        price: "Rs. 249",
      },
      {
        name: "Personalized Gift Set",
        title: "Custom name gift with theme styling",
        price: "Rs. 699",
      },
    ],
    available: [
      {
        name: "Mini Thank You Hamper",
        title: "Small hamper for guests and events",
        price: "Rs. 349",
      },
      {
        name: "Corporate Desk Gift",
        title: "Useful desk gift with clean packaging",
        price: "Rs. 599",
      },
      {
        name: "School Event Gift",
        title: "Simple gift option for school functions",
        price: "Rs. 299",
      },
      {
        name: "Housewarming Gift Tray",
        title: "Decor and utility items in a tray",
        price: "Rs. 1,199",
      },
      {
        name: "Chocolate And Note Box",
        title: "Sweet gift with personalized message",
        price: "Rs. 449",
      },
      {
        name: "Theme Party Hamper",
        title: "Gift hamper matched to party colors",
        price: "Rs. 899",
      },
      {
        name: "Teacher Appreciation Gift",
        title: "Thoughtful gift for teachers and mentors",
        price: "Rs. 399",
      },
      {
        name: "Premium Celebration Hamper",
        title: "Larger curated hamper for special occasions",
        price: "Rs. 1,499",
      },
    ],
  },
};

function createCatalogCard(product, fallbackImage) {
  const card = document.createElement("article");
  card.className = "catalog-card";

  const image = document.createElement("img");
  image.src = product.image || fallbackImage;
  image.alt = product.name;

  const content = document.createElement("div");
  content.className = "catalog-card-content";

  const name = document.createElement("h4");
  name.textContent = product.name;

  const title = document.createElement("p");
  title.textContent = product.title;

  const price = document.createElement("strong");
  price.className = "catalog-price";
  price.textContent = product.price;

  content.append(name, title, price);
  card.append(image, content);

  return card;
}

function createCatalogGroup(label, products, fallbackImage) {
  const group = document.createElement("section");
  group.className = "catalog-group";

  const heading = document.createElement("h3");
  heading.textContent = label;

  const grid = document.createElement("div");
  grid.className = "catalog-grid";

  products.forEach((product) => {
    grid.append(createCatalogCard(product, fallbackImage));
  });

  group.append(heading, grid);

  return group;
}

document.querySelectorAll("[data-product-catalog]").forEach((catalogRoot) => {
  const categoryKey = catalogRoot.dataset.productCatalog;
  const catalog = CATEGORY_PRODUCTS[categoryKey];

  if (!catalog) {
    return;
  }

  const header = document.createElement("div");
  header.className = "catalog-header";

  const eyebrow = document.createElement("span");
  eyebrow.className = "page-eyebrow";
  eyebrow.textContent = "Product catalog";

  const title = document.createElement("h2");
  title.textContent = catalog.title;

  const note = document.createElement("p");
  note.textContent = catalog.note;

  header.append(eyebrow, title, note);
  catalogRoot.append(
    header,
    createCatalogGroup("Popular Items", catalog.popular, catalog.image),
    createCatalogGroup("Available Items", catalog.available, catalog.image),
  );
});

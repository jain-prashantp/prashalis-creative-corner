const headerMarkup = `
  <header class="site-header">
    <a class="brand" href="index.html" aria-label="Go to home page">
      <img src="assets/images/logo.png" alt="Prashali's Creative Corner logo" class="brand-logo">
      <h1>Prashali's Creative Corner</h1>
    </a>
    <address class="contact-info">
      <div>&#9742; <a href="tel:+919555960606">+91-9555960606</a></div>
      <div>&#9993; <a href="mailto:info.prashaliscreativecorner@gmail.com">info.prashaliscreativecorner@gmail.com</a></div>
    </address>
  </header>
`;

const footerMarkup = `
  <footer class="site-footer">
    <nav aria-label="Footer">
      <a class="footer-link" href="about.html">About Us</a>
      <span aria-hidden="true">|</span>
      <a class="footer-link" href="what-we-offer.html">What We Offer</a>
      <span aria-hidden="true">|</span>
      <a class="footer-link" href="contact.html">Contact Us</a>
    </nav>
    <p>&copy; 2025 Prashali's Creative Corner. All rights reserved.</p>
  </footer>
`;

const floatingCategoryMarkup = `
  <nav class="floating-category-menu" aria-label="Quick category navigation">
    <a class="floating-category-link" href="stationary.html" aria-label="Go to Stationary">
      <span class="floating-category-icon">
        <img src="assets/images/category/stationery.png" alt="">
      </span>
      <span class="floating-category-name">Stationary</span>
    </a>
    <a class="floating-category-link" href="toys.html" aria-label="Go to Toys">
      <span class="floating-category-icon">
        <img src="assets/images/category/toys.png" alt="">
      </span>
      <span class="floating-category-name">Toys</span>
    </a>
    <a class="floating-category-link" href="artificial-plants.html" aria-label="Go to Artificial Plants">
      <span class="floating-category-icon">
        <img src="assets/images/category/artificial_plants.png" alt="">
      </span>
      <span class="floating-category-name">Artificial Plants</span>
    </a>
    <a class="floating-category-link" href="gifts.html" aria-label="Go to Gifts">
      <span class="floating-category-icon">
        <img src="assets/images/category/gifts.png" alt="">
      </span>
      <span class="floating-category-name">Gifts</span>
    </a>
  </nav>
`;

const helpWidgetMarkup = `
  <div class="help-widget">
    <button class="help-button" type="button" aria-controls="helpPopup" aria-expanded="false">
      Need help?
    </button>
    <section class="help-popup" id="helpPopup" aria-labelledby="helpPopupTitle" hidden>
      <button class="help-close" type="button" aria-label="Close help popup">&times;</button>
      <span class="page-eyebrow">Quick help</span>
      <h2 id="helpPopupTitle">Call or write to us</h2>
      <p>Share your occasion, category, quantity, and timeline. We will help you plan the right custom order.</p>
      <div class="help-actions">
        <a href="tel:+919555960606">
          <span>Call us</span>
          <strong>+91-9555960606</strong>
        </a>
        <a href="mailto:info.prashaliscreativecorner@gmail.com">
          <span>Write to us</span>
          <strong>info.prashaliscreativecorner@gmail.com</strong>
        </a>
      </div>
    </section>
  </div>
`;

document.body.insertAdjacentHTML("afterbegin", headerMarkup);
document.body.insertAdjacentHTML("beforeend", footerMarkup);
document.body.insertAdjacentHTML("beforeend", floatingCategoryMarkup);
document.body.insertAdjacentHTML("beforeend", helpWidgetMarkup);

const helpButton = document.querySelector(".help-button");
const helpPopup = document.getElementById("helpPopup");
const helpClose = document.querySelector(".help-close");

function setHelpPopup(open) {
  helpPopup.hidden = !open;
  helpButton.setAttribute("aria-expanded", String(open));

  if (open) {
    helpClose.focus();
  }
}

helpButton.addEventListener("click", () => {
  setHelpPopup(helpPopup.hidden);
});

helpClose.addEventListener("click", () => {
  setHelpPopup(false);
  helpButton.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !helpPopup.hidden) {
    setHelpPopup(false);
    helpButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (helpPopup.hidden || event.target.closest(".help-widget")) {
    return;
  }

  setHelpPopup(false);
});

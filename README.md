# Prashali's Creative Corner

Static website for Prashali's Creative Corner.

## Project Structure

```text
prashalis-creative-corner/
|-- index.html
|-- about.html
|-- what-we-offer.html
|-- contact.html
|-- stationary.html
|-- toys.html
|-- artificial-plants.html
|-- gifts.html
|-- CNAME
|-- README.md
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- js/
    |   |-- layout.js
    |   |-- category-products.js
    |   |-- products.js
    |   `-- main.js
    `-- images/
        |-- logo.png
        `-- category/
```

## Editing Products

Home-page category names, summaries, image URLs, and page URLs live in `assets/js/products.js`.

Category page content lives in the individual HTML files, such as `stationary.html` and `gifts.html`.

When product photos change, place them in `assets/images/category/` and update the related paths.

## Editing Category Product Lists

Products shown inside each category page live in `assets/js/category-products.js`.

Each category has two sections:

- `popular`
- `available`

Each product supports `name`, `title`, `price`, and optional `image`.

## Editing The Layout

The shared header and footer live in `assets/js/layout.js`.

Each HTML page should keep only its unique `<main class="page-main">...</main>` content and include:

```html
<script src="assets/js/layout.js" defer></script>
```

## Editing Styles

All site styling lives in `assets/css/styles.css`.

## Deployment

This site can be deployed as a plain static site. The `CNAME` file should stay at the project root for GitHub Pages custom-domain deployment.

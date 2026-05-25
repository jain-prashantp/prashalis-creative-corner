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

## Editing Styles

All site styling lives in `assets/css/styles.css`.

## Deployment

This site can be deployed as a plain static site. The `CNAME` file should stay at the project root for GitHub Pages custom-domain deployment.

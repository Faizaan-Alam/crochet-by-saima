# Your Crochet Studio

A single-page showcase for handmade crochet work. There is no cart or checkout.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add a piece

1. Put a photograph in `public/images/products/`.
2. Append an object in `data/products.ts` with that image path.
3. If the file is missing, the card shows a themed preview instead of a broken image.

Copy for the page lives in `data/site.ts`. Phone and WhatsApp links are there too.

Themes are Strawberry Cream, Lavender Dreams, Matcha Garden, and Vanilla Cocoa. The choice is saved in the browser.

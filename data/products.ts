/**
 * Add a creation by appending an object here.
 * Put the photograph in `public/images/products/` and set `image` to that public path.
 * If the file is missing, the card shows a themed illustration instead of a broken image.
 */

export const categories = [
  { id: "flowers", label: "Crochet Flowers" },
  { id: "plushies", label: "Plushies & Amigurumi" },
  { id: "bags", label: "Bags & Accessories" },
  { id: "home", label: "Home Decor" },
  { id: "custom", label: "Custom Creations" },
] as const;

export type Category = (typeof categories)[number]["id"];
export type Badge = "Handmade" | "Custom Made";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  badge?: Badge;
  image: string;
  alt: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "blush-peony",
    name: "Blush Peony",
    description:
      "A full, ruffled bloom stitched in blush and cream. A quiet little centrepiece for a desk or a gift.",
    category: "flowers",
    badge: "Handmade",
    image: "/images/products/blush-peony.jpg",
    alt: "Handmade blush pink crochet peony on a warm ivory background",
    featured: true,
  },
  {
    id: "meadow-daisy",
    name: "Meadow Daisy",
    description:
      "Cream petals around a butter-yellow heart. Simple, sunny, and ready to tuck into a bunch.",
    category: "flowers",
    badge: "Handmade",
    image: "/images/products/meadow-daisy.jpg",
    alt: "Cream crochet daisy with a butter-yellow centre",
  },
  {
    id: "buttercup-bunch",
    name: "Buttercup Bunch",
    description:
      "Three pale yellow blossoms tied with cotton string. A pocket-sized bouquet that never wilts.",
    category: "flowers",
    badge: "Handmade",
    image: "/images/products/buttercup-bunch.jpg",
    alt: "Three pale yellow crochet buttercups tied with cotton string",
  },
  {
    id: "berry-bunny",
    name: "Berry Bunny",
    description:
      "A soft round bunny with blush ears and a calm little face. The sort of companion that lives on a shelf.",
    category: "plushies",
    badge: "Handmade",
    image: "/images/products/berry-bunny.jpg",
    alt: "Small cream handmade bunny with blush inner ears, sitting upright",
    featured: true,
  },
  {
    id: "honey-bear",
    name: "Honey Bear",
    description:
      "A honey-beige bear with a round belly and tiny ears. Stitched slowly, meant to be held.",
    category: "plushies",
    badge: "Handmade",
    image: "/images/products/honey-bear.jpg",
    alt: "Small honey-beige handmade bear plush sitting upright",
  },
  {
    id: "puddle-duck",
    name: "Puddle Duck",
    description:
      "A cream duck with an apricot beak and rosy cheeks. Small enough to sit in the palm of a hand.",
    category: "plushies",
    badge: "Handmade",
    image: "/images/products/puddle-duck.jpg",
    alt: "Cream crochet duck with an apricot beak and pink cheeks",
  },
  {
    id: "market-tote",
    name: "Sunday Market Tote",
    description:
      "An airy cream tote with a blush stripe. Light, sturdy, and ready for flowers, books, or yarn.",
    category: "bags",
    badge: "Handmade",
    image: "/images/products/market-tote.jpg",
    alt: "Cream open-stitch crochet tote bag with a blush stripe",
    featured: true,
  },
  {
    id: "blossom-purse",
    name: "Blossom Coin Purse",
    description:
      "A blush purse closed with a cream button. A small place for coins, rings, or a lucky charm.",
    category: "bags",
    badge: "Handmade",
    image: "/images/products/blossom-purse.jpg",
    alt: "Blush pink crochet coin purse with a cream button",
  },
  {
    id: "bow-headband",
    name: "Soft Bow Headband",
    description:
      "A slim cream band finished with a gentle blush bow. Soft against the hair, simple to wear.",
    category: "bags",
    badge: "Handmade",
    image: "/images/products/bow-headband.jpg",
    alt: "Cream crochet headband with a blush bow",
  },
  {
    id: "petal-coasters",
    name: "Petal Coaster Set",
    description:
      "A stack of round coasters in blush and cream. A soft landing for a morning cup.",
    category: "home",
    badge: "Handmade",
    image: "/images/products/petal-coasters.jpg",
    alt: "Stack of round blush and cream crochet coasters",
  },
  {
    id: "loop-cushion",
    name: "Loop Stitch Cushion",
    description:
      "A cream cushion with a raised blush flower in the middle. Made to soften a chair or a window seat.",
    category: "home",
    badge: "Handmade",
    image: "/images/products/loop-cushion.jpg",
    alt: "Cream crochet cushion with a blush flower in the centre",
    featured: true,
  },
  {
    id: "arc-hanging",
    name: "Arc Wall Hanging",
    description:
      "A small hanging worked in cream and blush, suspended from a pale wooden dowel.",
    category: "home",
    badge: "Handmade",
    image: "/images/products/arc-hanging.jpg",
    alt: "Small cream and blush crochet wall hanging on a wooden dowel",
  },
  {
    id: "keepsake-bouquet",
    name: "Keepsake Bouquet",
    description:
      "A petite mix of crochet flowers wrapped in cream tissue. A gift that stays long after the day.",
    category: "custom",
    badge: "Custom Made",
    image: "/images/products/keepsake-bouquet.jpg",
    alt: "Petite bouquet of blush and cream crochet flowers wrapped in tissue",
  },
  {
    id: "heart-charm",
    name: "Heart Charm",
    description:
      "A blush heart and a tiny flower on a cream cord. A sweet starting point for a personalised piece.",
    category: "custom",
    badge: "Custom Made",
    image: "/images/products/heart-charm.jpg",
    alt: "Blush crochet heart and a tiny cream flower charm on a cord",
  },
];

export function categoryLabel(id: Category) {
  return categories.find((category) => category.id === id)?.label ?? id;
}

export const featuredProducts = products.filter((product) => product.featured);

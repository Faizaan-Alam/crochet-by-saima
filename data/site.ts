export const site = {
  name: "Your Crochet Studio",
  title: "Your Crochet Studio | Handmade With Love",
  description:
    "Explore beautiful handmade crochet creations, accessories, plushies, flowers, and personalised crochet gifts.",
  tagline: "Little loops, made slowly, with a whole lot of love.",
  phoneDisplay: "+91 99106 38880",
  phoneHref: "tel:+919910638880",
  whatsappNumber: "919910638880",
  whatsappMessage:
    "Hi! I came across your crochet website and would love to enquire about a custom crochet creation.",
  hero: {
    eyebrow: "Handmade crochet studio",
    titleLead: "Little Loops,",
    titleAccent: "Big Love.",
    text: "Handmade with love, one stitch at a time. Discover a little world of warmth, colours, and creativity.",
    primaryCta: "Explore My Creations",
    secondaryCta: "Let's Talk",
    notes: ["Handmade", "One of a kind", "Made to order"],
    imageAlt:
      "Blush and cream yarn, a wooden crochet hook, and a handmade flower",
  },
  creations: {
    eyebrow: "The collection",
    title: "Made With Love & Little Loops",
    subtitle: "Every piece has its own little story.",
  },
  featured: {
    eyebrow: "Highlights",
    title: "Featured Creations",
    subtitle: "A closer look at a few pieces from the collection.",
  },
  about: {
    eyebrow: "The studio",
    title: "A Little About My World",
    text: "Behind every little loop is a little bit of patience, creativity, and a whole lot of love. I create handmade crochet pieces that bring warmth, colour, and happiness into everyday life.",
    imageAlt:
      "A crochet workspace with blush and cream yarn, a wooden hook, a handmade flower, and folded linen",
    notes: [
      {
        title: "Stitched by hand",
        text: "Every piece is made slowly, loop by loop.",
      },
      {
        title: "Made to order",
        text: "Colours and details can be talked through before a piece begins.",
      },
      {
        title: "Small and personal",
        text: "A small studio practice, made one piece at a time.",
      },
    ],
  },
  custom: {
    eyebrow: "Custom orders",
    title: "Dream It. I'll Crochet It.",
    text: "Have something special in mind? From thoughtful gifts to personalised crochet creations, let's bring your ideas to life.",
    cta: "Message on WhatsApp",
  },
  contact: {
    eyebrow: "Say hello",
    title: "Let's Connect!",
    text: "The easiest way to reach the studio is a WhatsApp message or a phone call.",
    whatsappLabel: "WhatsApp",
    whatsappAction: "Send a message",
    phoneLabel: "Phone call",
    phoneAction: "Call now",
    instagramLabel: "Instagram",
    instagramStatus: "Coming soon",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#creations", label: "My Creations", id: "creations" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function whatsappHref(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryHref(name: string) {
  return whatsappHref(
    `Hi! I came across your crochet website and would love to enquire about the ${name}.`,
  );
}

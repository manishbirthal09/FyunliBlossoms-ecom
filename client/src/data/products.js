/**
 * products.js
 * --------------------------------------------------------------
 * Central data source for categories + products. Images are referenced
 * as absolute paths served straight from Vite's /public folder — no
 * import statements needed, and no bundler processing of the images.
 *
 * FOLDER STRUCTURE TO MATCH THESE PATHS:
 *
 *   public/
 *     images/
 *       categories/
 *         dhaniakhali.jpg
 *         begumpuri.jpg
 *         bhujodi.jpg
 *         baawan-buti.jpg
 *       weaves/                 (close-up story-section detail shots)
 *         dhaniakhali-detail.jpg
 *         begumpuri-detail.jpg
 *         bhujodi-detail.jpg
 *         baawan-buti-detail.jpg
 *       products/
 *         dhaniakhali-rose-check.jpg
 *         begumpuri-cotton.jpg
 *         bhujodi-indigo.jpg
 *         baawan-buti-silk-cotton.jpg
 *         dhaniakhali-marigold.jpg
 *         begumpuri-deep-red.jpg
 *       hero.jpg
 *       founder.jpg
 *
 * Anything placed in /public is served at the site root, so
 * public/images/hero.jpg becomes "/images/hero.jpg" below — you do NOT
 * write "/public/..." in the path. Swap in the client's real filenames
 * as they're delivered; you only need to update this file, not the
 * page components.
 * -------------------------------------------------------------- */

export const categories = [
  {
    slug: "dhaniakhali",
    name: "Dhaniakhali",
    region: "West Bengal",
    origin: "Fine cotton checks, woven in West Bengal",
    description:
      "Woven in the town of Dhaniakhali in West Bengal, this cotton is known for its fine checks and stripes, finished with a contrast border. It's an everyday cotton with a light, breathable hand — built for warm afternoons, not display cases.",
    image: "/images/categories/dhaniakhali.jpg",
    detailImage: "/cf1.jpeg",
  },
  {
    slug: "begumpuri",
    name: "Begumpuri",
    region: "West Bengal",
    origin: "Light cotton with woven geometric borders, Bengal",
    description:
      "Also from Bengal, Begumpuri cotton carries woven geometric and temple-inspired borders directly into the fabric rather than printing them on. The result is a saree that looks handmade because it is — thread by thread, on a pit loom.",
    image: "/images/categories/begumpuri.jpg",
    detailImage: "/cf2.jpeg",
  },
  {
    slug: "bhujodi",
    name: "Kala Cotton Bhujodi",
     region: "Kutch, Gujarat",
    origin: "Handspun rain-fed cotton, woven in Kutch",
    description:
      "Kala cotton is rain-fed and hand-spun in the arid Kutch region of Gujarat, then handwoven in the village of Bhujodi. It's a rougher, earthier cotton by design — closer to the soil it grew in than to a factory floor.",
    image: "/images/categories/bhujodi.jpg",
    detailImage: "/cf3.jpeg",
  },
  {
    slug: "baawan-buti",
    name: "Baawan Buti",
    region: "Nalanda, Bihar",
    origin: "52 motifs rooted in Nalanda's weaving heritage",
    description:
      "Named for the 52 motifs woven through its body, Baawan Buti traces back to Bihar's Nalanda district — a major Buddhist center since the fifth century. Look closely and you'll find the lotus, the deer, the stupa, still carried in thread today.",
    image: "/images/categories/baawan-buti.jpg",
    detailImage: "/cf4.jpeg",
  },
];

export const products = [
  {
    id: "dhaniakhali-rose-check",
    name: "Dhaniakhali Cotton Saree — Rose Check",
    category: "dhaniakhali",
    price: 3200,
    tag: "New",
    image: "/f1.jpeg",
  },
  {
    id: "begumpuri-cotton",
    name: "Begumpuri Handwoven Cotton Saree",
    category: "begumpuri",
    price: 2850,
    tag: null,
    image: "/f2.jpeg",
  },
  {
    id: "bhujodi-indigo",
    name: "Kala Cotton Bhujodi Saree — Indigo",
    category: "bhujodi",
    price: 4100,
    tag: "New",
    image: "/f3.jpeg",
  },
  {
    id: "baawan-buti-silk-cotton",
    name: "Baawan Buti Silk-Cotton Saree",
    category: "baawan-buti",
    price: 5600,
    tag: null,
    image: "/f4.jpeg",
  },
  {
    id: "dhaniakhali-marigold",
    name: "Dhaniakhali Cotton Saree — Marigold",
    category: "dhaniakhali",
    price: 3200,
    tag: null,
    image: "/f5.jpeg",
  },
  {
    id: "begumpuri-deep-red",
    name: "Begumpuri Saree — Deep Red",
    category: "begumpuri",
    price: 2950,
    tag: "New",
    image: "/f6.jpeg",
  },
];

/** Formats a number as INR, e.g. 3200 -> "₹3,200" */
export function formatPrice(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Convenience getters, handy on category/product detail pages later */
export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}
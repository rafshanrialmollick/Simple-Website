const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    reviewCount: 128,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description:
      "Experience pure sound with these high-quality noise-canceling headphones.",
  },
  {
    id: 2,
    name: "Minimalist Smartwatch",
    price: 199.5,
    reviewCount: 94,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description:
      "Sleek design combined with ultimate health and fitness tracking features.",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 129.0,
    reviewCount: 76,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
    description:
      "Tactile switches and fully customizable RGB lighting for the ultimate setup.",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 349.99,
    reviewCount: 112,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    description:
      "Designed for maximum comfort and posture support during long working hours.",
  },
  {
    id: 5,
    name: "4K Ultra HD Monitor",
    price: 450.0,
    reviewCount: 87,
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=80",
    description:
      "Crystal clear display for precise creative work and immersive gaming.",
  },
  {
    id: 6,
    name: "Portable Power Bank",
    price: 49.99,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
    description:
      "High-capacity fast charging battery pack to ensure you are never out of power.",
  },
];

function getShopPage(req, res) {
  res.render("shop", { title: "Shop | MyWebsite", products });
}

module.exports = {
  getShopPage,
};

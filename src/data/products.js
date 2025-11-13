import watch1 from "../assets/images/minimalist-1.jpg";
import watch2 from "../assets/images/minimalist-2.jpg";
import bag from "../assets/images/bag-1.webp";
import headphones from "../assets/images/head-phones.webp";
import runningShoes from "../assets/images/running-shoe.jpg";
import yogaMat from "../assets/images/yogamat.jpg";
import sunglasses from "../assets/images/sunglasses.jpg";
import travelBackpack from "../assets/images/travelBag.webp";
import smartFit1 from "../assets/images/smart-fitnes-1.jpg";
import smartFit2 from "../assets/images/smart-fitnes-2.jpg";
import ledDeskLamp from "../assets/images/LEDLamp.jpg";




export const products = [
  {
    id: 1,
    name: "Minimalist Watch",
    shortDescription: "Elegant timepiece with leather strap",
    longDescription:
      "A sophisticated minimalist watch featuring a clean dial design and premium leather strap. Perfect for both casual and formal occasions. Water-resistant up to 50 meters.",
    price: 12999,
    images: [
      // three watch images (different angles/colors)
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=800&fit=crop",
      watch1,
      watch2,
      ],
      category: "accessories",
      count: 1,
      },
      {
        id: 2,
        name: "Leather Messenger Bag",
        shortDescription: "Professional leather bag for work",
        longDescription:
          "Handcrafted leather messenger bag with multiple compartments. Ideal for laptops up to 15 inches and daily essentials. Features adjustable shoulder strap and brass hardware.",
        price: 18999,
        images: [
      // three leather bag images (different angles/usage)
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
      bag,
    ],
    category: "bags",
    count: 1,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    shortDescription: "Premium noise-canceling headphones",
    longDescription:
      "Experience crystal-clear audio with active noise cancellation. Up to 30 hours of battery life and comfortable over-ear design. Includes USB-C charging cable and carrying case.",
    price: 29999,
    images: [
      // headphones different views / lifestyle shots
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop",
      headphones,

    ],
    category: "electronics",
    count: 1,
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    shortDescription: "Comfortable organic cotton tee",
    longDescription:
      "Soft, breathable organic cotton t-shirt. Available in multiple colors. Perfect for everyday wear. Pre-shrunk and machine washable.",
    price: 2999,
    images: [
      // t-shirt product shots / color variants
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop",
    ],
    category: "clothing",
    count: 1,
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    shortDescription: "Track your health and fitness goals",
    longDescription:
      "Monitor your heart rate, steps, sleep patterns, and more. Water-resistant with 7-day battery life. Compatible with iOS and Android. Includes heart rate monitor and GPS tracking.",
    price: 9999,
    images: [
      // fitness tracker closeups and on-wrist shots
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=800&fit=crop",
      smartFit1,
      smartFit2,
    ],
    category: "electronics",
    count: 1,
  },
  {
    id: 6,
    name: "Running Shoes",
    shortDescription: "Lightweight performance running shoes",
    longDescription:
      "Engineered for runners with responsive cushioning and breathable mesh upper. Ideal for long-distance running. Features advanced traction sole for all weather conditions.",
    price: 11999,
    images: [
      // running shoes product angles and on-foot shot
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
      runningShoes,
    ],
    category: "footwear",
    count: 1,
  },
  {
    id: 7,
    name: "Sunglasses",
    shortDescription: "UV protection polarized sunglasses",
    longDescription:
      "Classic aviator style with polarized lenses offering 100% UV protection. Durable metal frame with spring hinges. Includes protective case and cleaning cloth.",
    price: 7999,
    images: [
      // sunglasses—product shots and lifestyle
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
      sunglasses,
    ],
    category: "accessories",
    count: 1,
  },
  {
    id: 8,
    name: "Travel Backpack",
    shortDescription: "Water-resistant travel backpack",
    longDescription:
      "Spacious 30L backpack with laptop compartment, USB charging port, and anti-theft design. Perfect for travel and daily commute. Multiple pockets for organization.",
    price: 8999,
    images: [
      // travel backpack: front, open interior, on-backshot
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
      travelBackpack,
    ],
    category: "bags",
    count: 1,
  },
  {
    id: 9,
    name: "LED Desk Lamp",
    shortDescription: "Modern LED desk lamp",
    longDescription:
      "Adjustable LED desk lamp with touch controls and 5 brightness levels. Energy-efficient and eye-friendly. Features flexible arm and stable base. Perfect for reading and working.",
    price: 4999,
    images: [
      // LED desk lamp different angles and in-use
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=800&fit=crop",
      ledDeskLamp,
    ],
    category: "home",
    count: 1,
  },
  {
    id: 10,
    name: "Yoga Mat",
    shortDescription: "Non-slip exercise mat",
    longDescription:
      "Premium non-slip yoga mat with extra cushioning. Eco-friendly TPE materials, perfect for yoga, pilates, and stretching. Includes carrying strap. 6mm thickness for optimal comfort.",
    price: 3999,
    images: [
      // yoga mat: top view, rolled, user-posed
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=800&fit=crop",
      yogaMat,
    ],
    category: "fitness",
    count: 1,
  },
];
// ...existing code...
import headphones from "../assets/products/headphones.webp";
import speaker from "../assets/products/speaker.webp";
import soundbar from "../assets/products/soundbar.webp";
import studioHeadphones from "../assets/products/studio-headphones.webp";
import earbuds from "../assets/products/earbuds.webp";

import gaming from "../assets/products/gaming-laptop.webp";
import ultrabook from "../assets/products/ultrabook.webp";
import creator from "../assets/products/creator-laptop.webp";
import business from "../assets/products/business-laptop.webp";

import mobileUltra from "../assets/products/mobileUltra.webp";
import mobile from "../assets/products/mobile.webp";
import mobilePro from "../assets/products/mobilePro.webp";
import fitwatch from "../assets/products/fitwatch.webp";

import keyboard from "../assets/products/keyboard.webp";
import gamingHeadset from "../assets/products/gaming-headset.webp";
import controller from "../assets/products/controller.webp";
import lamp from "../assets/products/lamp.webp";

import mouse from "../assets/products/mouse.webp";
import camera from "../assets/products/camera.webp";
import backpack from "../assets/products/backpack.webp";


const productList = [
  // AUDIO
  {
    id: 1,
    name: "Premium Wireless Headphones",
    brand: "Sony",
    category: "Audio",
    image: headphones,
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 245,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description:
      "Premium over-ear wireless headphones with active noise cancellation and immersive sound.",
  },

  {
    id: 8,
    name: "Bluetooth Speaker",
    brand: "Marshall",
    category: "Audio",
    image: speaker,
    price: 6999,
    originalPrice: 8499,
    rating: 4.8,
    reviews: 228,
    stock: true,
    featured: true,
    isNew: false,
    colors: ["Black"],
    description:
      "Portable Bluetooth speaker delivering rich bass and crystal-clear sound.",
  },

  {
    id: 11,
    name: "Wireless Earbuds",
    brand: "JBL",
    category: "Audio",
    image: earbuds,
    price: 3499,
    originalPrice: 4499,
    rating: 4.7,
    reviews: 356,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description:
      "Compact true wireless earbuds with deep bass and crystal-clear calling.",
  },

  {
    id: 13,
    name: "Studio Monitor Headphones",
    brand: "Audio-Technica",
    category: "Audio",
    image: studioHeadphones,
    price: 8999,
    originalPrice: 10999,
    rating: 4.7,
    reviews: 145,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Professional studio headphones designed for accurate sound monitoring.",
  },

  {
    id: 14,
    name: "Smart Soundbar",
    brand: "Samsung",
    category: "Audio",
    image: soundbar,
    price: 19999,
    originalPrice: 24999,
    rating: 4.8,
    reviews: 210,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description: "Premium soundbar with cinematic surround sound experience.",
  },

  // COMPUTERS
  {
    id: 2,
    name: "Gaming Laptop Pro",
    brand: "ASUS",
    category: "Computers",
    image: gaming,
    price: 89999,
    originalPrice: 99999,
    rating: 4.9,
    reviews: 164,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description:
      "High-performance gaming laptop powered by the latest hardware for creators and gamers.",
  },

  {
    id: 17,
    name: "Ultrabook Air",
    brand: "Lenovo",
    category: "Computers",
    image: ultrabook,
    price: 67999,
    originalPrice: 74999,
    rating: 4.7,
    reviews: 186,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Silver", "Black"],
    description:
      "Slim and lightweight laptop designed for productivity, study and everyday professional work.",
  },

  {
    id: 18,
    name: "Creator Laptop Studio",
    brand: "HP",
    category: "Computers",
    image: creator,
    price: 94999,
    originalPrice: 109999,
    rating: 4.8,
    reviews: 132,
    stock: true,
    featured: false,
    isNew: true,
    colors: ["Silver"],
    description:
      "Powerful laptop designed for creators, developers and demanding professional workloads.",
  },

  {
    id: 19,
    name: "Business Laptop Elite",
    brand: "Dell",
    category: "Computers",
    image: business,
    price: 72999,
    originalPrice: 79999,
    rating: 4.6,
    reviews: 218,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Reliable business laptop with a professional design, strong performance and long battery life.",
  },

  // MOBILE
  {
    id: 3,
    name: "Mobile Ultra",
    brand: "Samsung",
    category: "Mobile",
    image: mobileUltra,
    price: 74999,
    originalPrice: 82999,
    rating: 4.9,
    reviews: 512,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description:
      "Flagship mobile with an incredible display, premium cameras and powerful performance.",
  },

  {
    id: 4,
    name: "Smart Watch X",
    brand: "Apple",
    category: "Mobile",
    image: fitwatch,
    price: 19999,
    originalPrice: 22999,
    rating: 4.8,
    reviews: 318,
    stock: true,
    featured: true,
    isNew: false,
    colors: ["Black"],
    description:
      "Stylish watch with fitness tracking, notifications and long battery life.",
  },

  {
    id: 21,
    name: "Pro Smartphone",
    brand: "OnePlus",
    category: "Mobile",
    image: mobilePro,
    price: 54999,
    originalPrice: 59999,
    rating: 4.8,
    reviews: 284,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black", "Blue"],
    description:
      "Premium smartphone featuring a smooth display, powerful processor and advanced camera system.",
  },

  {
    id: 22,
    name: "Smartphone Max",
    brand: "Google",
    category: "Mobile",
    image: mobile,
    price: 64999,
    originalPrice: 69999,
    rating: 4.8,
    reviews: 196,
    stock: true,
    featured: false,
    isNew: true,
    colors: ["Black", "White"],
    description:
      "Modern flagship smartphone with intelligent features, excellent cameras and a vibrant display.",
  },

  // GAMING
  {
    id: 5,
    name: "Gaming Controller",
    brand: "Xbox",
    category: "Gaming",
    image: controller,
    price: 4999,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 197,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Ergonomic wireless controller designed for precision gaming and all-day comfort.",
  },

  {
    id: 12,
    name: "RGB Gaming Desk Lamp",
    brand: "Philips",
    category: "Gaming",
    image: lamp,
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 96,
    stock: true,
    featured: false,
    isNew: true,
    colors: ["Black"],
    description:
      "Modern RGB gaming desk lamp with adjustable brightness and ambient lighting for gaming setups.",
  },

  {
    id: 16,
    name: "Gaming Headset",
    brand: "HyperX",
    category: "Gaming",
    image: gamingHeadset,
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    reviews: 198,
    stock: true,
    featured: false,
    isNew: true,
    colors: ["Black"],
    description:
      "Comfortable gaming headset with surround sound and clear microphone.",
  },

  {
    id: 24,
    name: "RGB Gaming Keyboard",
    brand: "Razer",
    category: "Gaming",
    image: keyboard,
    price: 7999,
    originalPrice: 9499,
    rating: 4.8,
    reviews: 174,
    stock: true,
    featured: true,
    isNew: true,
    colors: ["Black"],
    description:
      "Mechanical RGB gaming keyboard designed for fast response, competitive gaming and immersive setups.",
  },
  // ACCESSORIES
  {
    id: 6,
    name: "Mechanical Keyboard",
    brand: "Logitech",
    category: "Accessories",
    image: keyboard,
    price: 5999,
    originalPrice: 7499,
    rating: 4.8,
    reviews: 274,
    stock: true,
    featured: false,
    isNew: true,
    colors: ["Black"],
    description:
      "RGB mechanical keyboard with tactile switches built for gaming and productivity.",
  },

  {
    id: 7,
    name: "Wireless Mouse",
    brand: "Logitech",
    category: "Accessories",
    image: mouse,
    price: 2499,
    originalPrice: 3299,
    rating: 4.7,
    reviews: 291,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Lightweight wireless mouse with precise tracking and long battery life.",
  },

  {
    id: 9,
    name: "DSLR Camera",
    brand: "Canon",
    category: "Accessories",
    image: camera,
    price: 54999,
    originalPrice: 62999,
    rating: 4.9,
    reviews: 142,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Professional DSLR camera capable of stunning photography and cinematic video.",
  },

  {
    id: 10,
    name: "Laptop Backpack",
    brand: "Arctic Fox",
    category: "Accessories",
    image: backpack,
    price: 1999,
    originalPrice: 2599,
    rating: 4.6,
    reviews: 178,
    stock: true,
    featured: false,
    isNew: false,
    colors: ["Black"],
    description:
      "Premium waterproof backpack with padded laptop compartment and spacious storage.",
  },
];

export const products = productList;

# 🛍️ ShopSearch — Product Search & Category Filter

A modern React application that lets users search and filter products in real time, built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## ✨ Features

- 🔍 **Live Search** — filters products instantly as you type (case-insensitive)
- 🗂️ **Category Filter Dropdown** — All / Electronics / Clothing / Home
- ⭐ **Star Ratings** — dynamic filled/empty stars per product
- 🖼️ **Product Images** — local assets served via Vite static imports
- 📱 **Responsive Grid** — 1 → 2 → 3 → 4 columns across breakpoints
- 🎨 **React Bits-inspired UI** — gradient borders, glow hover effects, shimmer badge, dot-grid background

---

## 🗂️ Project Structure

```
searchnfilter/
├── src/
│   ├── assets/              # Product images
│   ├── components/
│   │   └── ProductCard.jsx  # Individual product card component
│   ├── App.jsx              # Root component — state, filtering, layout
│   ├── index.css            # Tailwind + custom CSS utilities
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🧩 Product Dataset

```js
const products = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 60000, rating: 4.8 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000,  rating: 4.5 },
  { id: 3, name: "T-shirt",    category: "Clothing",    price: 800,   rating: 4.2 },
  { id: 4, name: "Shoes",      category: "Clothing",    price: 2500,  rating: 4.7 },
  { id: 5, name: "Coffee Mug", category: "Home",        price: 300,   rating: 4.6 },
];
```

---

## ✅ Test Cases

| # | Search | Category | Expected Output |
|---|--------|----------|-----------------|
| 1 | `""` | All | All 5 products |
| 2 | `"shoe"` | All | Shoes |
| 3 | `""` | Electronics | Laptop, Headphones |
| 4 | `"t"` | Clothing | T-shirt |
| 5 | `"phone"` | Clothing | No products found |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI & state management |
| Vite 7 | Dev server & bundler |
| Tailwind CSS v4 | Utility-first styling |
| `@tailwindcss/vite` | Tailwind Vite plugin |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🧠 Concepts Used

- `useState` — search text and selected category state
- `useRef` + `useEffect` — dropdown click-outside detection
- `Array.filter()` — combined search + category filtering
- **Props** — product data passed into `ProductCard`
- **Controlled inputs** — search input bound to state

---

## 👨‍💻 Author

**Raghav Karnatak** — Full Stack Development Assignment

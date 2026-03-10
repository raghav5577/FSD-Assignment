import { useState, useRef, useEffect } from 'react';
import ProductCard from './components/ProductCard';

import laptopImg from './assets/apple-m4-macbook-pro-lead-672b861685fd0.jpg';
import headphonesImg from './assets/headphones.jpeg';
import tshirtImg from './assets/tshirt.jpeg';
import shoesImg from './assets/shoes.avif';
import mugImg from './assets/coffee-mug.jpg';

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000, rating: 4.8, image: laptopImg },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000, rating: 4.5, image: headphonesImg },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800, rating: 4.2, image: tshirtImg },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500, rating: 4.7, image: shoesImg },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300, rating: 4.6, image: mugImg },
];

const categories = ["All", "Electronics", "Clothing", "Home"];

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">

      <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ShopSearch
            </span>
          </div>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
            {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">

        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 shimmer-badge text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-indigo-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
            Browse our collection
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Your cart is one{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">search</span>
            {' '}away
          </h2>
        </div>


        <div className="gradient-border mb-10 card-glow relative z-10">
          <div className="bg-white rounded-[17px] p-3 flex flex-col sm:flex-row gap-3">

            <div className="relative flex-1">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-focus w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl transition placeholder:text-gray-400 text-gray-800"
              />
            </div>

       
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory !== 'All'
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-transparent shadow-md shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M11 12h2M9 16h6" />
                </svg>
                {selectedCategory === 'All' ? 'Filter' : selectedCategory}
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

            
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden z-30">
                  <div className="p-1.5 flex flex-col gap-0.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setDropdownOpen(false); }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer text-left ${
                          selectedCategory === cat
                            ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {cat}
                        {selectedCategory === cat && (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

  
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center mb-5 border border-indigo-200">
              <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <p className="text-base font-semibold text-gray-800">No products found</p>
            <p className="text-sm text-gray-400 mt-1">Try a different keyword or category</p>
          </div>
        )}
      </main>
    </div>
  );
    
  
}

export default App;

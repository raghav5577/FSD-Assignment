const StarIcon = ({ filled }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? 'text-amber-400' : 'text-gray-200'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
  </svg>
);

function ProductCard({ product }) {
  const fullStars = Math.round(product.rating);

  return (
    <div className="gradient-border card-glow">
      <div className="bg-white rounded-[17px] overflow-hidden flex flex-col h-full">

        <div className="relative h-52 overflow-hidden bg-white border-b border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center text-5xl font-bold text-gray-200 bg-gray-50">
            {product.name[0]}
          </div>
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-indigo-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-100 tracking-wide uppercase shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-4">


          

          <h5 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-auto">
            {product.name}
          </h5>

          <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-100">
            <div>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-0.5">Price</p>
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ₹{product.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;

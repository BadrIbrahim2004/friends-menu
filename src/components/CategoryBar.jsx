function CategoryBar({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="container-fluid p-0 my-3">
      <div className="category-bar py-2 px-1 w-100">
        {categories.map((cat, idx) => {
          const isActive = activeCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className="btn btn-sm rounded-pill px-3 py-2 fw-bold"
              style={{
                backgroundColor: isActive ? "#d4af37" : "#1e1e1e",
                color: isActive ? "#121212" : "#f5f5f5",
                border: isActive ? "1px solid #d4af37" : "1px solid #2a2a2a",
                fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
                display: "inline-block",
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBar;

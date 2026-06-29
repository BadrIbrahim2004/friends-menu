function ProductCard({ product, currency }) {
  return (
    <div
      className="h-100 p-2 p-sm-3 d-flex flex-column justify-content-between shadow-sm"
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "16px",
        border: "1px solid #2a2a2a",
        minHeight: "260px",
      }}
    >
      <div
        className="position-relative w-100"
        style={{
          height: "clamp(110px, 22vw, 160px)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="mt-2 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h5
            className="h6 fw-bold text-white mb-1"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
          >
            {product.name}
          </h5>
          <p
            className="mb-2"
            style={{
              fontSize: "clamp(0.75rem, 1.7vw, 0.85rem)",
              lineHeight: "1.4",
              color: "#b3b3b3",
            }}
          >
            {product.desc}
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-1">
          <span
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            }}
          >
            {product.price} {currency}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

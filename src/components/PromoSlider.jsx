import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PromoSlider({ t }) {
  const sliderImages = [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600",
    "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600",
  ];

  return (
    <div
      id="promoCarousel"
      className="carousel slide my-3 shadow"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div
        className="carousel-indicators mb-2"
        style={{
          left: 0,
          right: 0,
          margin: "auto",
          justifyContent: "center",
          direction: "ltr",
        }}
      >
        {t.sliderTexts.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#promoCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>

      <div
        className="carousel-inner"
        style={{ borderRadius: "18px", height: "clamp(220px, 38vw, 360px)" }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100 h-100 object-fit-cover"
              alt={t.sliderTexts[index]}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                background: "rgba(0, 0, 0, 0.55)",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <h5
                className="fw-bold text-white mb-0"
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                  letterSpacing: "0.5px",
                }}
              >
                {t.sliderTexts[index]}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoSlider;

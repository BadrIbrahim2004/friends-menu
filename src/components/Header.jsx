function Header({ t, lang, toggleLang }) {
  const googleMapsUrl =
    lang === "ar"
      ? "https://maps.app.goo.gl/YourArabicMapLink"
      : "https://maps.app.goo.gl/YourEnglishMapLink";

  return (
    <header
      className="w-100 px-3 px-sm-4 py-2 py-sm-3 d-flex flex-wrap justify-content-between align-items-center gap-2 sticky-top shadow-sm"
      style={{
        backgroundColor: "#121212",
        borderBottom: "1px solid #333",
      }}
    >
      <div className="d-flex align-items-center gap-2 flex-wrap">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn d-flex align-items-center justify-content-center justify-content-sm-start gap-2 rounded-pill px-2 px-sm-3 py-1 py-sm-2 w-auto"
          style={{
            backgroundColor: "#d4af37",
            color: "#121212",
            fontSize: "clamp(0.72rem, 1.5vw, 0.86rem)",
            fontWeight: "bold",
            border: "1px solid #d4af37",
            whiteSpace: "nowrap",
            maxWidth: "100%",
          }}
        >
          <i className="fa fa-star" style={{ color: "#121212" }}></i>
          <span style={{ color: "#121212" }}>{t.googleMapsText}</span>
        </a>

        <button
          onClick={toggleLang}
          className="btn btn-outline-light rounded-pill px-2 px-sm-3 py-1 py-sm-2 text-uppercase fw-bold"
          style={{
            fontSize: "0.78rem",
            borderWidth: "1px",
            whiteSpace: "nowrap",
          }}
        >
          {lang === "ar" ? "EN" : "عربي"}
        </button>
      </div>

      <div
        className="d-flex align-items-center gap-2 fw-bold m-0"
        style={{
          letterSpacing: "-1px",
          fontSize: "clamp(1rem, 2.6vw, 1.35rem)",
        }}
      >
        <div
          className="fw-bold m-0 text-center text-sm-start"
          style={{
            letterSpacing: "-0.5px",
            fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)",
            lineHeight: "1.2",
          }}
        >
          <span className="text-white">Friends</span>
          <span style={{ color: "#d4af37" }}> Desserts</span>
        </div>
        <img
          src="/logo.svg"
          alt="Friends Logo"
          style={{
            height: "clamp(45px, 6vw, 65px)",
            width: "auto",
            objectFit: "contain",
            imageRendering: "crisp-edges",
          }}
        />
      </div>
    </header>
  );
}

export default Header;

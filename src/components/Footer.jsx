function Footer({ t }) {
  return (
    <footer className="bg-dark text-muted py-4 mt-5 border-top border-secondary text-center w-100">
      <div className="container px-3 px-sm-4">
        <h4 className="h6 text-white fw-bold mb-3" style={{ color: "#d4af37" }}>
          {t.contactTitle}
        </h4>

        <p className="small mb-2 text-secondary">{t.branchesTitle}</p>

        <div
          className="d-flex flex-column gap-2 mx-auto mb-4"
          style={{ maxWidth: "560px" }}
        >
          {t.branches.map((branch, idx) => (
            <a
              key={idx}
              href={`tel:${branch.phone}`}
              className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center p-2 px-3 text-decoration-none text-light"
              style={{
                backgroundColor: "#1e1e1e",
                borderRadius: "10px",
                border: "1px solid #2a2a2a",
                fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
              }}
            >
              <span className="fw-bold">
                <i className="fa fa-phone text-success me-2"></i>
                {branch.name}
              </span>
              <span style={{ color: "#d4af37" }}>{branch.phone}</span>
            </a>
          ))}
        </div>

        <div
          className="p-3 my-3 mx-auto"
          style={{
            backgroundColor: "rgba(212, 175, 55, 0.05)",
            border: "1px solid #d4af37",
            borderRadius: "12px",
            maxWidth: "500px",
          }}
        >
          <p className="small text-warning fw-bold mb-1">
            <i className="fa fa-bullhorn me-2"></i>
            {t.complaintsTitle}
          </p>
          <a
            href={`tel:${t.complaintsPhone}`}
            className="h5 text-white fw-bold text-decoration-none d-block"
          >
            {t.complaintsPhone}
          </a>
        </div>

        <div className="d-flex justify-content-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/FRIENDS502"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            style={{ fontSize: "1rem" }}
          >
            <i className="fa fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            style={{ fontSize: "1rem" }}
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/201272701712"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            style={{ fontSize: "1rem" }}
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>

        <p className="mt-4 mb-0" style={{ fontSize: "0.75rem", color: "#555" }}>
          &copy; {new Date().getFullYear()} Friends Desserts. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

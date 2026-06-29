import { useState } from "react";

function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: "fa-whatsapp",
      color: "#25D366",
      url: "https://wa.me/201272701712",
    },
    { icon: "fa-phone", color: "#d4af37", url: "tel:0132470441" },
    { icon: "fa-facebook-f", color: "#1877F2", url: "https://www.facebook.com/FRIENDS502" },
    // { icon: "fa-instagram", color: "#E1306C", url: "https://instagram.com" },
  ];

  return (
    <div
      className="position-fixed"
      style={{
        right: "clamp(1rem, calc((100% - 1400px) / 2 + 1rem), 3rem)",
        bottom: "1rem",
        zIndex: 1050,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn shadow-lg d-flex align-items-center justify-content-center"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#d4af37",
          color: "#121212",
          border: "none",
          fontSize: "1.25rem",
          transition: "transform 0.3s ease",
          transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
        }}
      >
        {isOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-comments"></i>
        )}
      </button>

      <div
        className="d-flex flex-column gap-2"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(16px)",
          pointerEvents: isOpen ? "all" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="btn shadow d-flex align-items-center justify-content-center"
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              backgroundColor: "#1e1e1e",
              color: link.color,
              border: "1px solid #333",
              fontSize: "1.05rem",
              transition: "transform 0.2s ease",
              transform: isOpen ? "scale(1)" : "scale(0)",
            }}
          >
            <i className={`fa ${link.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FloatingMenu;

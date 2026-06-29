function AnnouncementBar({ t }) {
  return (
    <div
      style={{
        backgroundColor: "#d4af37",
        fontSize: "clamp(0.78rem, 2vw, 0.95rem)",
        zIndex: 1050,
        lineHeight: 1.5,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div className="announcement-scroll">
        <span className="text-dark fw-bold">
          <i className="fa fa-motorcycle me-2"></i>
          {t.announcement}
        </span>
        {/* <span className="text-dark fw-bold">
          <i className="fa fa-motorcycle me-2"></i>
          {t.announcement}
        </span> */}
      </div>
    </div>
  );
}

export default AnnouncementBar;

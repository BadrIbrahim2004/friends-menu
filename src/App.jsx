import { useState } from "react";
import { menuData } from "./data/menuData";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import PromoSlider from "./components/PromoSlider";
import CategoryBar from "./components/CategoryBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";

function App() {
  const [lang, setLang] = useState("ar");
  const [activeCategory, setActiveCategory] = useState(0);

  const t = menuData[lang];

  const filteredProducts = t.products.filter(
    (product) => product.categoryIdx === activeCategory,
  );

  const toggleLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="app-shell min-vh-100 text-white"
      style={{ backgroundColor: "#121212", fontFamily: "Cairo, sans-serif" }}
    >
      <AnnouncementBar t={t} />

      <div className="mx-auto w-100" style={{ maxWidth: "1400px" }}>
        <Header t={t} lang={lang} toggleLang={toggleLang} />

        <div className="container-fluid px-3 px-sm-4 py-3 py-sm-4">
          <PromoSlider t={t} lang={lang} />

          <CategoryBar
            categories={t.categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <h4
            className="fw-bold my-3 my-sm-4 border-bottom pb-2 d-inline-block"
            style={{
              borderColor: "#d4af37",
              fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
            }}
          >
            {t.categories[activeCategory]}
          </h4>

          <main className="row g-3 g-sm-4 row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard product={product} currency={t.currency} />
              </div>
            ))}
          </main>
        </div>
      </div>

      <Footer t={t} />
      <FloatingMenu />
    </div>
  );
}

export default App;

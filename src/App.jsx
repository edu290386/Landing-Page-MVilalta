import React, { useState, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-group">
          <div style={{ cursor: "pointer" }}>Acerca ▾</div>
          <div style={{ cursor: "pointer" }}>Listas ▾</div>
          <div style={{ cursor: "pointer" }}>Media ▾</div>
        </div>

        <div className="nav-center">MIGUEL VILLALTA</div>

        <div className="nav-right">
          <span
            style={{
              cursor: "pointer",
              fontSize: "10px",
              letterSpacing: "2px",
            }}
          >
            CONTACTO
          </span>
          <GrSearch style={{ cursor: "pointer", fontSize: "18px" }} />
          <RxHamburgerMenu style={{ cursor: "pointer", fontSize: "24px" }} />
        </div>
      </nav>

      {/* HERO ENMARCADO */}
      <main className="hero-container">
        <div className="hero-frame">
          <img
            src="/src/assets/miguelejemplo.jpg"
            className="hero-img"
            alt="Miguel Villalta Luxury"
          />

          <div className="hero-content">
            <div className="hero-text">
              <h1>Lujo en su Máxima Expresión</h1>
              <p>El Líder en Bienes Raíces de Lujo Global</p>
            </div>

            <button className="btn-explore">Explorar</button>
          </div>
        </div>
      </main>

      {/* SECCIÓN EXTRA PARA PROBAR EL SCROLL */}
      <section
        style={{
          height: "100vh",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#ccc",
            letterSpacing: "10px",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Scroll para navegar
        </p>
      </section>
    </div>
  );
}

export default App;

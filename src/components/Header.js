import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#0077b6",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease, background-color 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#00b4d8";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#0077b6";
    e.target.style.transform = "scale(1)";
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderBottom: "2px solid #ddd",
        // marginBottom: "20px",
      }}
    >
      <Link
        to="/"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        🏠 Accueil
      </Link>
      <Link
        to="/odd"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        🌍 Développement durable
      </Link>
      <Link
        to="/retro"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        🎮 Ecologie à l'ancienne
      </Link>
      <Link
        to="/green"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ♻️ Code Vert
      </Link>
      <Link
        to="/badui"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        💥 Expérience Utilisateur
      </Link>
      <Link
        to="/clicker"
        style={navStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        🐟 Catch the trash
      </Link>
    </header>
  );
}

export default Header;

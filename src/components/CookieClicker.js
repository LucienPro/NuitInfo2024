import React, { useState, useEffect } from "react";
import Header from "./Header"; // Import du composant Header

function CookieClicker() {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    if (clicks > 0 && clicks % 5 === 0) {
      setMessage("Continuez, marin courageux !");
    } else {
      setMessage("");
    }
  }, [clicks]);

  const handleClick = () => {
    if (isDisabled || !isButtonVisible) return;

    if (Math.random() < 0.1) {
      setClicks(clicks - 5);
      setMessage("Oh non, une vague a emporté vos points !");
    } else {
      setClicks(clicks + 1);
      setMessage("Bien joué, capitaine !");
    }

    if (Math.random() < 0.2) {
      setIsDisabled(true);
      setMessage("Le bouton est bloqué par une pieuvre !");
      setTimeout(() => {
        setIsDisabled(false);
        setMessage("");
      }, Math.random() * 3000 + 1000);
    }

    if (Math.random() < 0.15) {
      setIsButtonVisible(false);
      setMessage("Le bouton a plongé dans l'eau !");
      setTimeout(() => {
        setIsButtonVisible(true);
      }, Math.random() * 3000 + 2000);
    }

    if (Math.random() < 0.1) {
      alert("Erreur critique : Votre bateau tangue trop !");
    }
  };

  return (
    <div><Header />
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundImage: "url('../../images/ocean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <h2>Chasse aux Perles</h2>
      {isButtonVisible && (
        <button
          onClick={handleClick}
          disabled={isDisabled}
          style={{
            position: "absolute",
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            transform: `scale(${Math.random() * 0.5 + 0.75})`,
            background: "url('../../images/poisson.png') no-repeat center",
            backgroundSize: "cover",
            borderRadius: "50%",
            border: "2px solid #ffffff",
            width: "120px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        >
          {clicks}
        </button>
      )}
      <p style={{ color: "black" }}>Nombre de clics : {clicks}</p>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}

export default CookieClicker;
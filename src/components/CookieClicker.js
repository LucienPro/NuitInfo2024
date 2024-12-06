import React, { useState, useEffect } from "react";
import Header from "./Header";

function CookieClicker() {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    if (clicks > 0 && clicks % 5 === 0) {
      showMessage("Continuez, marin courageux !");
    }
  }, [clicks]);

  const showMessage = (newMessage, duration = 3000) => {
    setMessage(newMessage);
    setTimeout(() => {
      setMessage(""); // Réinitialise le message après la durée spécifiée.
    }, duration);
  };

  const handleClick = () => {
    if (isDisabled || !isButtonVisible) return;

    if (Math.random() < 0.1) {
      setClicks((prev) => Math.max(0, prev - 5)); // Empêche les points négatifs.
      showMessage("Oh non, une vague a emporté vos points !", 5000);
    } else {
      setClicks((prev) => prev + 1);
      showMessage("Bien joué, capitaine !");
    }

    if (Math.random() < 0.2) {
      setIsDisabled(true);
      showMessage("La bouteille est bloquée par une pieuvre !", 4000);
      setTimeout(() => {
        setIsDisabled(false);
      }, Math.random() * 3000 + 1000);
    }

    if (Math.random() < 0.15) {
      setIsButtonVisible(false);
      showMessage("La bouteille a coulé dans les profondeurs !", 4000);
      setTimeout(() => {
        setIsButtonVisible(true);
      }, Math.random() * 3000 + 2000);
    }

    if (Math.random() < 0.1) {
      alert("Erreur critique : Votre bateau tangue trop !");
    }
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundImage: "url('../../images/Ocean_Background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Header />
        <h2>Chasse aux déchets</h2>
        <h4>
          Attrape la bouteille si tu la trouves, il se peut qu'il y ait des
          péripéties dans ton aventure
        </h4>
        <p>Défi : Cookie Cauchemar by CAPGEMINI PAU</p>
        {isButtonVisible && (
          <button
            onClick={handleClick}
            disabled={isDisabled}
            style={{
              position: "absolute",
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: "url('../../images/Bottle_Trash.png') no-repeat center",
              backgroundSize: "contain",
              border: "none",
              width: "100px",
              height: "150px",
              cursor: "pointer",
            }}
          >
            {/* Bouton interactif */}
          </button>
        )}

        {/* Compteur stylisé */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "White",
            animation: "pulse 1.5s infinite",
          }}
        >
          {clicks}
        </div>

        {/* Message stylisé */}
        {message && (
          <p
            style={{
              color: "#FFD700",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginTop: "20px",
              animation: "fadein 1s",
            }}
          >
            {message}
          </p>
        )}
      </div>

    </div>
  );
}

export default CookieClicker;

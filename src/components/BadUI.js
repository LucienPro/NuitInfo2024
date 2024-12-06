import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function BadUI() {
  const [score, setScore] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });

  const repositionButton = () => {
    const randomTop = Math.random() * 80 + "%";
    const randomLeft = Math.random() * 90 + "%";
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  useEffect(() => {
    const interval = setInterval(repositionButton, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setScore(score + 1);
    repositionButton();
  };

  return (
    <div>
      <Header />
      <div
        style={{
          background: "linear-gradient(45deg, pink, lime, cyan, orange)",
          color: "yellow",
          padding: "50px",
          minHeight: "100vh",
          overflow: "hidden",
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            textShadow: "3px 3px 0px red",
            letterSpacing: "5px",
            lineHeight: "0.8",
          }}
        >
          Bienvenue sur la <span style={{ color: "lime" }}>Pire Interface</span> Jamais Vue
        </h1>

        <p>Défi : Bad UI Challenge by ZENIKA</p>

        <p
          style={{
            fontSize: "14px",
            color: "purple",
            margin: "0 auto",
            width: "90%",
            textAlign: "justify",
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: "20px",
            border: "5px dotted red",
          }}
        >
          Ce site est une démonstration parfaite de ce qu'il ne faut jamais faire : couleurs criardes, mauvais
          alignement, polices douteuses et interactions inutiles. Profitez de l'expérience déplorable !
        </p>

        <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <article
            style={{
              backgroundColor: "#001f3f",
              color: "#00ff00",
              padding: "20px",
              width: "300px",
              border: "3px solid red",
              boxShadow: "5px 5px 0px yellow",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", color: "cyan" }}>Pollution : Un Bien pour la Planète ?</h2>
            <p>
              Des chercheurs (imaginaires) affirment que la pollution "ajoute de la couleur" aux paysages monotones. 
              "Qui n'aime pas un océan scintillant de plastique ?" déclare un expert en sarcasme.
            </p>
          </article>
          <article
            style={{
              backgroundColor: "#3f007b",
              color: "#ff0",
              padding: "20px",
              width: "300px",
              border: "3px dashed lime",
              boxShadow: "5px 5px 0px red",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", color: "yellow" }}>Déchets : Le Nouvel Or Noir</h2>
            <p>
              Selon des économistes fictifs, collecter des déchets pour les transformer en décorations pourrait relancer
              l'économie. Pensez à toutes les bouteilles flottantes qui attendent de devenir des vases !
            </p>
          </article>
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", color: "#ff00ff", textShadow: "3px 3px 0px cyan" }}>
            Le Jeu le Plus Frustrant
          </h2>
          <p style={{ fontSize: "18px", color: "#ff0" }}>
            Essayez de cliquer sur le bouton pour augmenter votre score. Bonne chance !
          </p>
          <p style={{ fontSize: "20px", color: "#00ff00", fontWeight: "bold" }}>Score : {score}</p>

          <button
            onClick={handleButtonClick}
            style={{
              position: "absolute",
              top: buttonPosition.top,
              left: buttonPosition.left,
              backgroundColor: "red",
              color: "yellow",
              fontSize: "20px",
              padding: "10px 20px",
              border: "5px solid lime",
              cursor: "pointer",
              animation: "wiggle 0.3s infinite",
            }}
          >
            Cliquez ici
          </button>
        </div>

        <style>
          {`
            @keyframes wiggle {
              0%, 100% {
                transform: rotate(-3deg);
              }
              50% {
                transform: rotate(3deg);
              }
            }
          `}
        </style>
      </div>
      <Footer />
    </div>
  );
}

export default BadUI;

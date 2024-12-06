import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function RetroOcean() {
  const [score, setScore] = useState(0);
  const [fishPosition, setFishPosition] = useState({ top: "50%", left: "50%" });
  const [level, setLevel] = useState(1);

  const repositionFish = () => {
    const randomTop = Math.random() * 80 + "%";
    const randomLeft = Math.random() * 90 + "%";
    setFishPosition({ top: randomTop, left: randomLeft });
  };

  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setLevel((prev) => prev + 1);
    }
  }, [score]);

  useEffect(() => {
    repositionFish();
  }, []);

  const handleFishClick = () => {
    setScore(score + 1);
    repositionFish();
  };

  return (
    <div
      style={{
        fontFamily: "'Press Start 2P', cursive",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Garantit que le conteneur occupe toute la hauteur de l'écran
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Header/>
      <div className="retro-container" style={{ flex: "1", textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            color: "#00ffff",
            textShadow: "0px 0px 5px #00ffff",
          }}
        >
          Attrape les déchets dans un Style Rétro !
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#FFD700" }}>Score : {score}</p>
        <p style={{ fontSize: "1rem", color: "#00ff00" }}>Niveau : {level}</p>
        <p style={{ fontSize: "0.6rem", color: "#00ff00" }}>Défi : On veut du gros pixel by IUTLCO - DéPARTEMENT INFORMATIQUE</p>
        <div
          className="retro-ocean"
          style={{
            position: "relative",
            height: "400px",
            border: "3px solid #00ffff",
            margin: "20px auto",
            width: "80%",
            backgroundColor: "#001f3f",
            overflow: "hidden",
          }}
        >
          <div
            className="fish"
            onClick={handleFishClick}
            style={{
              position: "absolute",
              top: fishPosition.top,
              left: fishPosition.left,
              width: "70px",
              height: "70px",
              backgroundImage: "url('/images/Pixel_bottle.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              animation: "swim 5s linear infinite",
            }}
          ></div>
        </div>
        <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
          Cliquez sur le déchet pour augmenter votre score !
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default RetroOcean;

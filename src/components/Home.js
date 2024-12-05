import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenue dans l'Application Nuit de l'Info 2024</h1>
      <p>
        Explorez les similitudes entre le corps humain et l'Océan à travers des
        interactions immersives et éducatives !
      </p>
      <nav>
        <Link to="/odd">Les ODD en lumière</Link> | 
        <Link to="/retro">Style rétro-gaming</Link> | 
        <Link to="/green">Green Coding</Link> | 
        <Link to="/badui">Bad UI Challenge</Link> | 
        <Link to="/clicker">Cookie Cauchemar</Link>
      </nav>
    </div>
  );
}

export default Home;

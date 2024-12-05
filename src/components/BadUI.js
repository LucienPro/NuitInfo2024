import React from "react";
import Header from "./Header"; // Import du composant Header

function BadUI() {
  return (<div><Header />
    <div style={{ backgroundColor: "pink", color: "yellow", padding: "50px" }}>
      <h1 style={{ fontSize: "50px", fontFamily: "Comic Sans MS" }}>Bienvenue sur la Pire Interface</h1>
      <button style={{ backgroundColor: "red", fontSize: "20px" }}>Cliquez ici (ou pas)</button>
    </div>
    </div>
  );
}

export default BadUI;

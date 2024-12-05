import React from "react";

function BadUI() {
  return (
    <div style={{ backgroundColor: "pink", color: "yellow", padding: "50px" }}>
      <h1 style={{ fontSize: "50px", fontFamily: "Comic Sans MS" }}>Bienvenue sur la Pire Interface</h1>
      <button style={{ backgroundColor: "red", fontSize: "20px" }}>Cliquez ici (ou pas)</button>
    </div>
  );
}

export default BadUI;

import React, { useState } from "react";

function CookieClicker() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Cookie Cauchemar</h2>
      <button
        onClick={() => setClicks(clicks + 1)}
        style={{
          position: "absolute",
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
        }}
      >
        Cliquez-moi !
      </button>
      <p>Nombre de clics : {clicks}</p>
    </div>
  );
}

export default CookieClicker;

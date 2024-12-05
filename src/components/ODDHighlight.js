import React from "react";

function ODDHighlight() {
  const oddData = [
    { id: 14, title: "Vie aquatique", description: "Protéger les océans." },
    { id: 13, title: "Lutte contre le changement climatique", description: "Réduire les émissions de CO2." },
    // Ajoutez d'autres ODD ici
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Les Objectifs de Développement Durable</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {oddData.map((odd) => (
          <div key={odd.id} style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
            <h3>{odd.title}</h3>
            <p>{odd.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ODDHighlight;

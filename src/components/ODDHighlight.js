import React, { useState } from "react";
import Header from "./Header"; // Import du composant Header
import { FaFish, FaTree, FaRecycle } from "react-icons/fa"; // Import des icônes

function ODDHighlight() {
  const [selectedOdd, setSelectedOdd] = useState(null); // État pour suivre l'ODD sélectionné

  const oddData = [
    {
      id: 14,
      title: "Vie aquatique",
      description: "Protéger les océans en réduisant la pollution et en préservant la biodiversité marine.",
      details: `Les océans fournissent 50 % de l’oxygène mondial grâce à la photosynthèse du phytoplancton. 
      Ils jouent un rôle crucial dans la régulation du climat en absorbant la chaleur et en distribuant les courants marins.`,
      impact: [
        "80 % de la pollution marine provient de sources terrestres.",
        "Les récifs coralliens pourraient disparaître d'ici 2050 sans actions immédiates.",
        "Protéger 30 % des zones marines pourrait sauver des espèces clés."
      ],
      icon: <FaFish size={50} color="#007bff" />
    },
    {
      id: 13,
      title: "Lutte contre le changement climatique",
      description: "Réduire les émissions de CO2 pour limiter le réchauffement global.",
      details: `L’océan absorbe environ 25 % des émissions de CO2, ce qui en fait un allié essentiel dans la lutte contre le changement climatique. 
      Cependant, son acidification met en danger les écosystèmes marins.`,
      impact: [
        "Les océans stockent 90 % de la chaleur générée par les émissions de gaz à effet de serre.",
        "L'acidification des océans a augmenté de 30 % depuis l'ère préindustrielle.",
        "Investir dans les énergies marines pourrait réduire les émissions mondiales de CO2 de 20 %."
      ],
      icon: <FaTree size={50} color="#28a745" />
    },
    {
      id: 12,
      title: "Consommation et production responsables",
      description: "Adopter des pratiques durables pour minimiser les impacts environnementaux.",
      details: `Chaque année, 11 millions de tonnes de plastique finissent dans les océans. 
      La transition vers une économie circulaire est cruciale pour réduire les déchets.`,
      impact: [
        "Seulement 9 % des plastiques produits dans le monde sont recyclés.",
        "Réduire de moitié les déchets plastiques pourrait diminuer la pollution marine de 80 %.",
        "Sensibiliser les consommateurs pourrait réduire les déchets ménagers de 20 %."
      ],
      icon: <FaRecycle size={50} color="#ffc107" />
    },
  ];

  return (
    <div>
      <Header />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#007bff", fontSize: "2.5rem" }}>Objectifs de Développement Durable</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "#555" }}>
            Explorez les liens entre les ODD et la préservation des océans. Découvrez comment des actions concrètes peuvent avoir un impact durable sur notre planète.
          </p>
        </section>

        {/* Cartes des ODD */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {oddData.map((odd) => (
            <div
              key={odd.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: selectedOdd === odd.id ? "#e6f7ff" : "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                width: "300px",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
              onClick={() => setSelectedOdd(odd.id)}
            >
              <div style={{ marginBottom: "15px" }}>{odd.icon}</div>
              <h3 style={{ color: "#007bff", fontSize: "1.5rem" }}>{odd.title}</h3>
              <p style={{ color: "#555" }}>{odd.description}</p>
            </div>
          ))}
        </div>

        {/* Détails ODD sélectionné */}
        {selectedOdd && (
          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#007bff", textAlign: "center" }}>
              {oddData.find((odd) => odd.id === selectedOdd).title}
            </h2>
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", color: "#555" }}>
              {oddData.find((odd) => odd.id === selectedOdd).details}
            </p>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ color: "#333" }}>Impact environnemental</h3>
              <ul style={{ listStyleType: "disc", margin: "20px auto", maxWidth: "600px", color: "#555" }}>
                {oddData
                  .find((odd) => odd.id === selectedOdd)
                  .impact.map((item, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ODDHighlight;

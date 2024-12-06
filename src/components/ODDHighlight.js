import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaFish, FaTree, FaRecycle, FaTemperatureHigh, FaWater } from "react-icons/fa";

function ODDHighlight() {
  const [selectedOdd, setSelectedOdd] = useState(null);

  const oddData = [
    {
      id: 14,
      title: "Vie aquatique",
      description: "Protéger les océans en réduisant la pollution et en préservant la biodiversité marine.",
      details: `Les océans jouent un rôle vital pour la vie sur Terre en fournissant 50 % de l’oxygène mondial et en absorbant la chaleur. Protéger leur biodiversité est crucial pour notre survie.`,
      visualImpact: [
        {
          icon: <FaFish size={40} color="#007bff" />,
          label: "80 % de la pollution marine provient des terres.",
        },
        {
          icon: <FaTree size={40} color="#28a745" />,
          label: "Les récifs coralliens sont en danger.",
        },
        {
          icon: <FaRecycle size={40} color="#ffc107" />,
          label: "Protéger 30 % des zones marines sauverait des espèces.",
        },
      ],
    },
    {
      id: 13,
      title: "Lutte contre le changement climatique",
      description: "Réduire les émissions de CO2 pour limiter le réchauffement global.",
      details: `Les océans absorbent environ 25 % des émissions de CO2, mais leur acidification et la montée des températures menacent les écosystèmes marins.`,
      visualImpact: [
        {
          icon: <FaTemperatureHigh size={40} color="#ff4500" />,
          label: "Les océans stockent 90 % de la chaleur du CO2.",
        },
        {
          icon: <FaWater size={40} color="#1e90ff" />,
          label: "L'acidification a augmenté de 30 % depuis l'ère industrielle.",
        },
        {
          icon: <FaRecycle size={40} color="#ffc107" />,
          label: "Les énergies marines peuvent réduire 20 % des émissions.",
        },
      ],
    },
    {
      id: 12,
      title: "Consommation et production responsables",
      description: "Adopter des pratiques durables pour minimiser les impacts environnementaux.",
      details: `Chaque année, des millions de tonnes de plastique polluent les océans. Une transition vers des modèles durables est essentielle pour réduire les déchets.`,
      visualImpact: [
        {
          icon: <FaRecycle size={40} color="#007bff" />,
          label: "9 % seulement des plastiques sont recyclés.",
        },
        {
          icon: <FaFish size={40} color="#28a745" />,
          label: "Réduire les déchets plastiques diminue 80 % de la pollution marine.",
        },
        {
          icon: <FaTree size={40} color="#ffc107" />,
          label: "Les déchets ménagers pourraient baisser de 20 % avec la sensibilisation.",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          backgroundColor: "#f0f8ff",
          minHeight: "100vh",
        }}
      >
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#007bff", fontSize: "2.5rem" }}>Objectifs de Développement Durable</h1>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            Découvrez comment des actions concrètes liées aux ODD peuvent préserver les océans et notre planète.
          </p>
          <p style={{
              maxWidth: "800px",
              margin: "0 auto",
              paddingTop: "10",
              fontSize: "0.9rem",
              color: "#555",
            }}>Défi : Les ODD en lumière by HARA CONSULTING</p>
        </section>

        {/* Cartes des ODD */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {oddData.map((odd) => (
            <div
              key={odd.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: selectedOdd === odd.id ? "#e6f7ff" : "white",
                boxShadow: selectedOdd === odd.id
                  ? "0px 6px 10px rgba(0, 123, 255, 0.4)"
                  : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                width: "300px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: selectedOdd === odd.id ? "scale(1.05)" : "scale(1)",
              }}
              onClick={() => setSelectedOdd(odd.id)}
            >
              <h3 style={{ color: "#007bff", fontSize: "1.5rem" }}>{odd.title}</h3>
              <p style={{ color: "#555" }}>{odd.description}</p>
            </div>
          ))}
        </div>

        {/* Détails ODD sélectionné */}
        {selectedOdd && (
          <div
            style={{
              marginTop: "40px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#007bff" }}>{oddData.find((odd) => odd.id === selectedOdd).title}</h2>
            <p style={{ maxWidth: "800px", margin: "20px auto", color: "#555" }}>
              {oddData.find((odd) => odd.id === selectedOdd).details}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              {oddData
                .find((odd) => odd.id === selectedOdd)
                .visualImpact.map((impact, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "15px",
                      borderRadius: "10px",
                      backgroundColor: "#eaf5ff",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                    }}
                  >
                    {impact.icon}
                    <p style={{ marginTop: "10px", color: "#007bff", fontSize: "0.9rem" }}>{impact.label}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ODDHighlight;

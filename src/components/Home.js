import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Import du composant Header

const parallels = [
  {
    icon: "🌊",
    title: "Le Cœur",
    description:
      "Les courants océaniques régulent la circulation de la chaleur et des nutriments, comme le cœur pompe le sang dans tout le corps.",
  },
  {
    icon: "🌬️",
    title: "Les Poumons",
    description:
      "Le phytoplancton produit environ 50 % de l'oxygène sur Terre, tout comme les poumons échangent les gaz pour respirer.",
  },
  {
    icon: "🧠",
    title: "Le Système Nerveux",
    description:
      "Les écosystèmes interconnectés agissent comme un réseau nerveux sensible aux perturbations externes, tout comme les connexions neuronales.",
  },
  {
    icon: "🩸",
    title: "Le Sang et les Nutriments",
    description:
      "Les courants transportent les nutriments et l'énergie nécessaires à la vie marine, tout comme le sang transporte les nutriments dans le corps.",
  },
  {
    icon: "🌡️",
    title: "La Thermorégulation",
    description:
      "L’océan régule le climat en absorbant et redistribuant la chaleur, comme le corps humain maintient sa température interne.",
  },
  {
    icon: "🗑️",
    title: "Le Système Digestif",
    description:
      "Les zones d’absorption et de transformation dans les océans jouent un rôle dans la décomposition des matières organiques, comme le système digestif.",
  },
  {
    icon: "🌿",
    title: "Le Foie",
    description:
      "Les mangroves et herbiers marins purifient l’eau, tout comme le foie détoxifie le sang.",
  },
  {
    icon: "🦴",
    title: "Le Squelette",
    description:
      "Les récifs coralliens forment une structure qui protège les côtes, comme le squelette soutient et protège le corps.",
  },
  {
    icon: "⚓",
    title: "La Moelle Osseuse",
    description:
      "Les abysses océaniques, riches en nutriments, sont comparables à la moelle osseuse, qui est essentielle à la production des cellules vitales.",
  },
];

function Home() {
  const [selected, setSelected] = useState(null);

  const toggleDescription = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div>
      {/* Inclusion du composant Header */}
      <Header />

      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Et si l'Océan était un corps humain ?</h1>
        <p>
          L’Océan, comme le corps humain, joue un rôle essentiel dans le
          maintien de l’équilibre de la vie sur Terre. Découvrez à travers cette
          application interactive les parallèles fascinants entre ces deux
          systèmes complexes.
        </p>
        <p>
          Vous apprendrez comment l’Océan agit comme un cœur, des poumons, ou
          même un système digestif pour notre planète, tout en explorant ses
          mystères et ses fragilités face aux défis environnementaux.
        </p>

        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>L'Océan et le Corps Humain : Les Parallèles</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {parallels.map((item, index) => (
              <li
                key={index}
                style={{
                  margin: "20px 0",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => toggleDescription(index)}
              >
                <div style={{ fontSize: "24px" }}>
                  {item.icon} <strong>{item.title}</strong>
                </div>
                {selected === index && (
                  <p style={{ marginTop: "10px", color: "#555" }}>
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

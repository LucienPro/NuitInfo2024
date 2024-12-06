import React, { useState } from "react";
import Header from "./Header";
import PodcastPlayer from './PodcastPlayer';
import Footer from './Footer';

const parallels = [
  { icon: "🌊", title: "Le Cœur", description: "Les courants océaniques régulent la circulation de la chaleur et des nutriments, comme le cœur pompe le sang dans tout le corps." },
  { icon: "🌬️", title: "Les Poumons", description: "Le phytoplancton produit environ 50 % de l'oxygène sur Terre, tout comme les poumons échangent les gaz pour respirer." },
  { icon: "🧠", title: "Le Système Nerveux", description: "Les écosystèmes interconnectés agissent comme un réseau nerveux sensible aux perturbations externes, tout comme les connexions neuronales." },
  { icon: "🩸", title: "Le Sang et les Nutriments", description: "Les courants transportent les nutriments et l'énergie nécessaires à la vie marine, tout comme le sang transporte les nutriments dans le corps." },
  { icon: "🌡️", title: "La Thermorégulation", description: "L’océan régule le climat en absorbant et redistribuant la chaleur, comme le corps humain maintient sa température interne." },
  { icon: "🗑️", title: "Le Système Digestif", description: "Les zones d’absorption et de transformation dans les océans jouent un rôle dans la décomposition des matières organiques, comme le système digestif." },
  { icon: "🌿", title: "Le Foie", description: "Les mangroves et herbiers marins purifient l’eau, tout comme le foie détoxifie le sang." },
  { icon: "🦴", title: "Le Squelette", description: "Les récifs coralliens forment une structure qui protège les côtes, comme le squelette soutient et protège le corps." },
  { icon: "⚓", title: "La Moelle Osseuse", description: "Les abysses océaniques, riches en nutriments, sont comparables à la moelle osseuse, qui est essentielle à la production des cellules vitales." },
];

function Home() {
  const [selected, setSelected] = useState(null);
  const [explored, setExplored] = useState([]);

  const toggleDescription = (index) => {
    setSelected(selected === index ? null : index);
    if (!explored.includes(index)) {
      setExplored([...explored, index]);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Et si l'Océan était un corps humain ?</h1>
        <p>
          L’Océan, comme le corps humain, joue un rôle essentiel dans le maintien de l’équilibre de la vie sur Terre. 
          Découvrez à travers cette application interactive les parallèles fascinants entre ces deux systèmes complexes.
        </p>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1rem", paddingTop: "20px", color: "#555" }}>
          Défi de la nuit de l'informatique 2024
        </p>

        <div style={{ marginTop: "40px", backgroundColor: "#f0f8ff", padding: "20px", borderRadius: "10px" }}>
          <h2>L'Océan et le Corps Humain : Les Parallèles</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {parallels.map((item, index) => (
              <li
                key={index}
                style={{
                  margin: "20px 0",
                  border: selected === index ? "2px solid #007bff" : "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: explored.includes(index) ? "#e6f7ff" : "#fff",
                  transition: "background-color 0.3s ease, border 0.3s ease",
                }}
                onClick={() => toggleDescription(index)}
              >
                <div style={{ fontSize: "24px" }}>
                  {item.icon} <strong>{item.title}</strong>
                </div>
                {selected === index && (
                  <p style={{ marginTop: "10px", color: "#555", animation: "fadeIn 0.3s" }}>
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <p>
            Parallèles explorés : {explored.length}/{parallels.length}
          </p>
        </div>
      </div>
      <PodcastPlayer />
      <Footer />
    </div>
  );
}

export default Home;

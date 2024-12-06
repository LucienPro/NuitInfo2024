import React, { useState } from "react";
import Header from "./Header"; // Import du composant Header
import Footer from "./Footer"; // Import du composant Footer

function GreenCoding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const adventureSteps = [
    {
      title: "Commencez votre voyage Green Coding",
      description: "Vous êtes un développeur audacieux, prêt à réduire l'empreinte carbone numérique.",
      action: "Cliquez pour continuer votre mission.",
    },
    {
      title: "Évitez les pièges énergivores",
      description: "Minifiez votre code CSS/JS pour éviter les lourdeurs inutiles.",
      action: "Cliquez sur le bouton pour compresser les ressources.",
    },
    {
      title: "Optimisez les images",
      description: "Vos images sont trop lourdes ! Compression nécessaire pour réduire l'impact.",
      action: "Appuyez ici pour utiliser un outil comme TinyPNG.",
    },
    {
      title: "Réduisez les requêtes réseau",
      description: "Mettez en cache les ressources pour minimiser les allers-retours inutiles.",
      action: "Configurez votre cache dès maintenant.",
    },
    {
      title: "Supprimez le code mort",
      description: "Identifiez et supprimez les fichiers ou lignes de code inutilisés.",
      action: "Nettoyez votre projet.",
    },
    {
      title: "Allégez votre design",
      description: "Adoptez un design minimaliste qui utilise moins de ressources.",
      action: "Simplifiez vos interfaces.",
    },
    {
      title: "Adoptez des pratiques d’audit",
      description: "Analysez vos performances pour identifier les points à optimiser.",
      action: "Lancez un audit avec Lighthouse.",
    },
    {
      title: "Choisissez un hébergement éco-responsable",
      description: "Passez à un hébergeur utilisant des énergies renouvelables.",
      action: "Changez d'hébergeur.",
    },
    {
      title: "Sensibilisez votre équipe",
      description: "Expliquez les principes du Green Coding à vos collègues.",
      action: "Partagez vos connaissances.",
    },
    {
      title: "Félicitations !",
      description: "Vous avez terminé votre parcours Green Coding et contribué à un numérique plus durable.",
      action: "Retournez au début pour explorer à nouveau.",
    },
  ];

  const handleNextStep = () => {
    if (currentStep < adventureSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0); // Réinitialise à la première étape
      setShowSummary(true); // Affiche le récapitulatif
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          flex: "1",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
        }}
      >
        {/* Introduction */}
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#007bff", fontSize: "2.5rem" }}>Pratiques de Green Coding</h1>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            Nous avons conçu cette application en respectant les principes du <strong>Green Coding</strong>, afin de
            réduire son impact environnemental tout en optimisant ses performances. Découvrez comment nous avons intégré
            ces pratiques pour un numérique responsable.
          </p>
          <p>Défi : La Menace Fantôme de l'Empreinte Carbone by CGI FRANCE</p>
        </section>

        {/* Aventure Green Coding */}
        <section style={{ textAlign: "center", marginTop: "40px" }}>
          <h2 style={{ color: "#28a745", fontSize: "2rem" }}>
            Entrez dans l'Aventure Green Coding
          </h2>
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h3 style={{ color: "#007bff" }}>{adventureSteps[currentStep].title}</h3>
            <p style={{ color: "#555", fontSize: "1rem", margin: "20px 0" }}>
              {adventureSteps[currentStep].description}
            </p>
            <button
              onClick={handleNextStep}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              {adventureSteps[currentStep].action}
            </button>
          </div>
        </section>

        {/* Récapitulatif */}
        {showSummary && (
          <section style={{ marginTop: "60px" }}>
            <h2 style={{ textAlign: "center", color: "#007bff" }}>Résumé de votre aventure Green Coding</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              {adventureSteps.slice(0, -1).map((step, index) => (
                <div key={index} style={summaryTileStyle}>
                  <h3 style={{ color: "#28a745" }}>{step.title}</h3>
                  <p style={{ color: "#555", fontSize: "0.9rem" }}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}

// Styles pour les tuiles récapitulatives
const summaryTileStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  backgroundColor: "#f9f9f9",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

export default GreenCoding;

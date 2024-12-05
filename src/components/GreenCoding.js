import React from "react";
import Header from "./Header"; // Import du composant Header

function GreenCoding() {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#007bff", fontSize: "2.5rem" }}>Pratiques de Green Coding</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "#555" }}>
            Nous avons conçu cette application en respectant les principes du <strong>Green Coding</strong>, afin de réduire son impact environnemental tout en optimisant ses performances. Découvrez comment nous avons intégré ces pratiques pour un numérique responsable.
          </p>
        </section>

        {/* Exemples concrets */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#333", textAlign: "center" }}>Exemples Concrets d'Impact</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Compression des Images</h3>
              <p>
                Les images de l'application ont été compressées pour réduire leur taille, passant de <strong>10 Mo</strong> à seulement <strong>2 Mo</strong>.
              </p>
              <p style={highlightStyle}>
                Impact : Économie de <strong>80 %</strong> sur la bande passante.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Optimisation des API</h3>
              <p>
                Les appels API ont été regroupés et mis en cache, réduisant de <strong>30 %</strong> le nombre total de requêtes réseau.
              </p>
              <p style={highlightStyle}>
                Impact : Réduction des émissions de CO₂ liées au trafic réseau.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Temps de Chargement</h3>
              <p>
                Grâce à des techniques de minification du code, le temps de chargement est passé de <strong>2,5 secondes</strong> à <strong>1,2 secondes</strong> sur mobile.
              </p>
              <p style={highlightStyle}>
                Impact : Amélioration de l'accessibilité pour les utilisateurs.
              </p>
            </div>
          </div>
        </section>

        {/* Lien avec le Livre Blanc */}
        <section style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2 style={{ color: "#333" }}>Lien avec le Livre Blanc de CGI</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1rem", color: "#555" }}>
            Le <strong>Livre Blanc de CGI</strong> propose des pratiques pour un numérique responsable. Voici comment nous avons intégré leurs recommandations :
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Sobriété Numérique</h3>
              <p>
                Limitation des ressources utilisées en optimisant les images, en réduisant le code et en minimisant les calculs serveur.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Effet Multiplicateur</h3>
              <p>
                Chaque optimisation (même mineure) contribue significativement à réduire l'empreinte carbone numérique globale.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Sensibilisation</h3>
              <p>
                Informer les utilisateurs sur les pratiques responsables, comme le vidage de cache ou la réduction des téléchargements inutiles.
              </p>
            </div>
          </div>
        </section>

        {/* Actions pour aller plus loin */}
        <section>
          <h2 style={{ color: "#333", textAlign: "center" }}>Comment Adopter le Green Coding ?</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1rem", color: "#555", textAlign: "center" }}>
            Voici quelques actions concrètes pour intégrer le Green Coding dans vos projets :
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div style={actionStyle}>
              <h3 style={cardTitleStyle}>Compressez vos Images</h3>
              <p>
                Utilisez des outils comme <strong>TinyPNG</strong> ou <strong>ImageOptim</strong> pour réduire la taille de vos images sans perte de qualité.
              </p>
            </div>
            <div style={actionStyle}>
              <h3 style={cardTitleStyle}>Optimisez votre Code</h3>
              <p>
                Supprimez les lignes inutilisées, minifiez vos fichiers CSS/JS et utilisez des outils comme <strong>Webpack</strong>.
              </p>
            </div>
            <div style={actionStyle}>
              <h3 style={cardTitleStyle}>Utilisez un Audit</h3>
              <p>
                Analysez vos performances avec <strong>Lighthouse</strong> ou <strong>EcoIndex</strong> pour identifier les axes d'amélioration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Styles pour les cartes et actions
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  width: "300px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease",
};
const cardTitleStyle = {
  color: "#007bff",
  fontSize: "1.5rem",
  marginBottom: "10px",
};
const highlightStyle = {
  color: "#28a745",
  fontWeight: "bold",
};
const actionStyle = {
  ...cardStyle,
  backgroundColor: "#e6f7ff",
};

export default GreenCoding;

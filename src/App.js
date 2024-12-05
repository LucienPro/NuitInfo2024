import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ODDHighlight from "./components/ODDHighlight";
import RetroOcean from "./components/RetroOcean";
import GreenCoding from "./components/GreenCoding";
import BadUI from "./components/BadUI";
import CookieClicker from "./components/CookieClicker";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/odd">Les ODD en lumière</Link></li>
              <li><Link to="/retro">Style Rétro-Gaming</Link></li>
              <li><Link to="/green">Green Coding</Link></li>
              <li><Link to="/badui">Bad UI Challenge</Link></li>
              <li><Link to="/clicker">Cookie Cauchemar</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/odd" element={<ODDHighlight />} />
            <Route path="/retro" element={<RetroOcean />} />
            <Route path="/green" element={<GreenCoding />} />
            <Route path="/badui" element={<BadUI />} />
            <Route path="/clicker" element={<CookieClicker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

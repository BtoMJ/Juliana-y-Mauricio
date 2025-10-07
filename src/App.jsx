import { useState, useEffect } from "react";
import flowers from "./assets/flores.png";
import poster from "./assets/Poster.png";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Music from "./components/Music/Music";
import Carrusel from "./components/Carrusel/Carrusel";
import Whats from "./components/Whats/Whats";
import Confetti from "react-confetti-boom";
import "./App.css";

function App() {
  const [particles, setParticles] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setParticles(70);
    }, 1000);

    const timer = setTimeout(() => {
      setParticles(0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Confetti
        mode="boom"
        particleCount={particles}
        colors={["#2f3e5f", "#b38d0b", "#82a0ab"]}
        style={{ zIndex: "50" }}
        shapeSize={7}
        launchSpeed={2}
        fadeOutHeight={0.7}
        effectInterval={5000}
        opacityDeltaMultiplier={0.1}
        effectCount={74}
      />

      <div className="info">
        <Music />
        <>
          <img src={flowers} className="top-img" />
          <img src={poster} className="poster" />
          <p className="names">Juliana & Mauricio</p>
          <p className="title-names">¡NOS CASAMOS!</p>
          <p className="date-names">03 ENE 2026</p>
        </>
        <Second />
        <Third />
        <Carrusel />
        <Whats />
      </div>
    </div>
  );
}

export default App;

import flowers from "./assets/flores.png";
import poster from "./assets/Poster.png";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Music from "./components/Music/Music";
import Carrusel from "./components/Carrusel/Carrusel";
import "./App.css";

function App() {
  return (
    <div className="container">
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
        <></>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from "react";
import "./Carrusel.css";

const slides = [
  <div className="slide-container-1"></div>,
  <div className="slide-container-2"></div>,
  <div className="slide-container-3"></div>,
  <div className="slide-container-4"></div>,
  <div className="slide-container-5"></div>,
];

function Carrusel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % slides.length),
      delay
    );
    return () => resetTimeout();
  }, [index]);

  return (
    <>
      <p className="cita">
        Amar es elegir cada día compartir la vida, los sueños y el corazón.
      </p>
      <div className="carousel-fade">
        {slides.map((content, i) => (
          <div key={i} className={`fade-slide ${i === index ? "active" : ""}`}>
            {content}
          </div>
        ))}
      </div>
    </>
  );
}

export default Carrusel;

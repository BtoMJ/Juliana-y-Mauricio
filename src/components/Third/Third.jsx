import { FaGift } from "react-icons/fa6";
import "./Third.css";

function Third() {
  return (
    <section className="gif-container">
      <h2>Mesa de Regalos</h2>
      <p>
        El mejor presente es que nos acompañes en este día tan especial, pero si
        lo deseas, te compartimos nuestra mesa de regalos o puedes hacer una
        contribución el día de nuestra boda.
      </p>
      <a
        href="https://www.amazon.com.mx/wedding/guest-view/301S8GG5KAQ16"
        target="_blanck"
      >
        <FaGift className="gift-icon" />
        Ir a la mesa
      </a>
    </section>
  );
}

export default Third;

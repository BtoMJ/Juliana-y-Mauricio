import { IoLogoWhatsapp } from "react-icons/io";
import "./Whats.css";

function Whats() {
  const emojiCode = 0x1f90d;
  const emojiCode2 = 0x1fe0f;
  const emoji = String.fromCodePoint(emojiCode);
  const emoji2 = String.fromCodePoint(emojiCode2);
  const message = `¡Hola! ${emoji} Quiero confirmar mi asistencia a la Boda de Juliana & Mauricio 👰🤵  ${emoji2}`;
  const number = "524761037311"; // sin signos ni espacios
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  console.log(waUrl);

  return (
    <section className="confirm">
      <h2>Asistencia</h2>
      <p>
        Tu presencia hará más especial nuestro día, por favor confirma tu
        asistencia.
      </p>
      <a
        href="https://wa.me/524761037311?text=%C2%A1Hola!%20%F0%9F%98%83%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20Boda%20de%20Juliana%20%26%20Mauricio%20%F0%9F%91%B0%F0%9F%A4%B5"
        target="_blank"
        rel="noopener"
        aria-label="Confirmar Asistencia por WhatsApp"
      >
        <IoLogoWhatsapp className="confirm-icon" />
        Confirmar
      </a>
    </section>
  );
}

export default Whats;

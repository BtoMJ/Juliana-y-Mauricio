import photo from "../../assets/foto2.png";
import church from "../../assets/templo.webp";
import salon from "../../assets/arcadia.webp";
import Countdown from "../Countdown/Countdown";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiCrossFill } from "react-icons/ri";

function Second() {
  return (
    <section className="date-container">
      <>
        <div className="final-countdown">
          <Countdown />
          <p className="cita-countdown">
            Dos almas, un destino… acompáñanos a celebrar el inicio de nuestra
            historia juntos.
          </p>
        </div>

        <img src={photo} alt="foto acostados" />

        <div className="data-church">
          <h2>Ceremonia</h2>
          <p className="title-names">Templo de San Judas Tadeo</p>
          <p className="direction">Av Roma s/n Col. Andrade</p>
          <p className="time">4:00 pm</p>
          <img className="church" src={church} alt="templo" />
          <a
            href="https://www.google.com/maps/place/Templo+de+San+Judas+Tadeo/@21.11158,-101.7537528,12z/data=!4m7!3m6!1s0x842bbfa89d40f225:0xaa4026b39ded1840!8m2!3d21.1113194!4d-101.671351!15sChl0ZW1wbG8gZGUgc2FuIGp1ZGFzIHRhZGVvWhsiGXRlbXBsbyBkZSBzYW4ganVkYXMgdGFkZW-SAQ9jYXRob2xpY19jaHVyY2iaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnFjblZ5TkhwUlJSQUKqAWAQASodIhl0ZW1wbG8gZGUgc2FuIGp1ZGFzIHRhZGVvKA4yHhABIhrmPlJLLRTo90Hrs_e0wu3CQKiumUsuU7L0cDIdEAIiGXRlbXBsbyBkZSBzYW4ganVkYXMgdGFkZW_gAQD6AQQIABAu!16s%2Fg%2F1tqg0nl5?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=0415feb1-2514-45a2-a53f-97d2d8748e7f"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <h2>Recepción</h2>
          <p className="title-names">Jardin De Eventos Arcadia</p>
          <p className="direction">
            Prolongación Adolfo López Mateos 3112 A Col. El Rosario
          </p>
          <p className="time">6:30 pm</p>
          <img className="church" src={salon} alt="templo" />
          <a
            href="https://www.google.com/maps/place/Jardin+De+Eventos+Arcadia./@21.1605209,-101.6853361,17z/data=!3m1!4b1!4m6!3m5!1s0x842bbf35a1eed18b:0xb9ef255b6681fa74!8m2!3d21.1605159!4d-101.6827612!16s%2Fg%2F11bx4627jq?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=e10616f0-31e4-41c4-b97f-3944b0f1c089"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <h2>Nos Acompañan</h2>
          <p>Nuestros padres</p>
          <div className="parients">
            <>
              <h3>Ma. Félix de los Santos</h3>
              <h3>José Córdova</h3>
            </>
            <>
              <h3>Juan Carlos Hernández</h3>
              <h3>
                Yolanda Márquez <RiCrossFill />
              </h3>
            </>
          </div>
          <p>Padrinos de Velación</p>
          <div className="parients">
            <>
              <h3>Isaura Córdova</h3>
              <h3>Román Mojica</h3>
            </>
          </div>
          <p>Padrinos de Anillos</p>
          <div className="parients">
            <>
              <h3>Irais Hernández</h3>
              <h3>Leonardo Torres</h3>
            </>
          </div>
        </div>
      </>
    </section>
  );
}

export default Second;

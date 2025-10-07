import { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown() {
  const targetDate = new Date("2026-01-03T16:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsOver(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isOver) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontFamily: "serif",
          color: "#d63384",
          marginTop: "2rem",
        }}
      >
        💖 ¡Llegó el día de nuestra boda! 💍
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <div>
        <p className="number">{timeLeft.days}</p>
        <br />
        <p>Días</p>
      </div>
      <div>
        <p className="number">{timeLeft.hours}</p>
        <br />
        <p>Horas</p>
      </div>
      <div>
        <p className="number">{timeLeft.minutes}</p>
        <br />
        <p>Min</p>
      </div>
      <div>
        <p className="number">{timeLeft.seconds}</p>
        <br />
        <p>Seg</p>
      </div>
    </div>
  );
}

export default Countdown;

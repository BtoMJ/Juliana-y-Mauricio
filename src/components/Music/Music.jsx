import { useState } from "react";
import useSound from "use-sound";
import music from "../../assets/music.mp3";
import { FaPlay, FaStop } from "react-icons/fa";
import "./Music.css";

function Music() {
  const [icon, setIcon] = useState(false);
  const [play, { stop }] = useSound(music);

  return (
    <button onClick={() => setIcon(!icon)} className="btn-music">
      {icon === true ? (
        <p onClick={() => stop()}>
          <FaStop className="btn-stop" />
        </p>
      ) : (
        <p onClick={() => play()}>
          <FaPlay className="btn-play" />
        </p>
      )}
    </button>
  );
}

export default Music;

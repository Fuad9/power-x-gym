import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../Shared/NavBar/NavBar";

const url = "../../../sounds/back-sound.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
    </div>
  );
};

export default Player;

import React from "react";

import useSound from "use-sound";

import clickSound from "../../../media/sounds/click-sound.wav";

interface Props {
  children: any;
}

const PlaySound: React.FC<Props> = ({ children }) => {
  const [play] = useSound(clickSound);

  return <button onClick={() => play()}>{children}</button>;
};

export default PlaySound;

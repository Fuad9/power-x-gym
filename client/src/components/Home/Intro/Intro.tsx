import React from "react";
import "./Intro.scss";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import HeaderMain from "../../HeaderMain/HeaderMain";
import PlaySound from "../../utilities/soundEffect/PlaySound";
import ReactPlayer from "react-player";

const Intro: React.FC = () => {
  const videoUrl = "../../../media/videos/intro-video.mp4";

  return (
    <HeaderMain>
      <div className="split intro-container">
        <div>
          <Typed
            style={{ fontSize: "2.5rem", color: "orange" }}
            strings={["THE BEST FITNESS STUDIO IN TOWN"]}
            typeSpeed={120}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem numquam aliquam libero ad molestiae itaque dolor
            debitis vero hic.
          </p>

          <Link to="/programs">
            <PlaySound>join us</PlaySound>
          </Link>
        </div>

        <div>
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </HeaderMain>
  );
};

export default Intro;

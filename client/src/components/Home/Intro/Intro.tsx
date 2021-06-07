import React, { useState } from "react";
import "./Intro.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import playButton from "../../../images/playButton.webp";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import HeaderMain from "../../HeaderMain/HeaderMain";
import PlaySound from "../../utilities/soundEffect/PlaySound";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 560,
    padding: theme.spacing(2, 4, 3),
  },
}));

const Intro: React.FC = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <iframe
        title="gym"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/X6BOs1Ejpvw"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );

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
          <button type="button" onClick={handleOpen}>
            <img width="50px" src={playButton} alt="" />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </div>
    </HeaderMain>
  );
};

export default Intro;

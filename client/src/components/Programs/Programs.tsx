import React from "react";
//styles
import "./Programs.scss";
import { Link } from "react-router-dom";
import HeaderMain from "../HeaderMain/HeaderMain";
import ReactTyped from "react-typed";
import SkeletonComponent from "../utilities/skeletonLoading/programsLoading/SkeletonComponent.programs";

const Programs: React.FC = () => {
  return (
    <>
      <HeaderMain>
        <ReactTyped
          style={{ fontSize: "2.5rem", color: "orange" }}
          strings={["OUR CLASSES"]}
          typeSpeed={120}
        />
      </HeaderMain>
      <section className="container">
        <SkeletonComponent>
          <div className="split">
            <div className="inner-container-one">
              <Link to="/programDetails">
                <img
                  src="https://i.ibb.co/cDsV6kY/victor-freitas-546919-unsplash.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="inner-container-two">
              <Link to="/programDetails">
                <img
                  src="https://i.ibb.co/Rz1tpft/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="inner-container-three">
              <Link to="/programDetails">
                <img
                  src="https://i.ibb.co/3pp2ddt/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </SkeletonComponent>
      </section>

      <section className="container">
        <SkeletonComponent>
          <div className="split">
            <div className="inner-container-four">
              <Link to="/programDetails">
                <img
                  src="https://i.ibb.co/cc5STkx/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="inner-container-five">
              <Link to="/programDetails">
                <img
                  src="https://i.ibb.co/N73w5Nb/john-fornander-FIu48iuo-4g-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="inner-container-six">
              <Link to="/programDetails">
                <img src="https://i.ibb.co/9n48GdY/card-One-Bg.jpg" alt="" />
              </Link>
            </div>
          </div>
        </SkeletonComponent>
      </section>
    </>
  );
};

export default Programs;

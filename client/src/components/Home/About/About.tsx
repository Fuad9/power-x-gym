import React from "react";
//styles
import "./About.scss";
import ScrollAnimation from "react-animate-on-scroll";
import SkeletonComponent from "../../utilities/skeletonLoading/aboutGymLoading/SkeletonComponent.about";

const About: React.FC = () => {
  return (
    <section className="container" id="about">
      <SkeletonComponent>
        <div className="split about">
          <div>
            <img src="https://i.ibb.co/4dHpLdW/aboutImg.jpg" alt="" />
          </div>

          <div>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h1>we are here to dream</h1>
            </ScrollAnimation>
            <h3>our team is here to serve you</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nulla mollitia veniam suscipit quasi obcaecati perspiciatis
              architecto! Deleniti, nostrum iusto.
            </p>
          </div>
        </div>
      </SkeletonComponent>
    </section>
  );
};

export default About;

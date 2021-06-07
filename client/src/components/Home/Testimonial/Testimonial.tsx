import React from "react";
//images
import fitness from "../../../images/Group 87.png";
import cardio from "../../../images/Group 88.png";
import membership from "../../../images/gift-2.png";
//styles
import "./Testimonial.scss";
import ScrollAnimation from "react-animate-on-scroll";
import SkeletonComponent from "../../utilities/skeletonLoading/testimonialLoading/SkeletonComponent.testimonial";

const Testimonial: React.FC = () => {
  return (
    <>
      <section className="container">
        <ScrollAnimation
          duration={5}
          animateIn="wobble"
          initiallyVisible={true}
        >
          <h1 className="text-center">why choose us</h1>
        </ScrollAnimation>
        <SkeletonComponent>
          <div className=" testimonial-area row">
            <ScrollAnimation
              animateIn="bounceInRight"
              className="col-12 col-sm-12 col-md-4"
            >
              <div className="testimonial-card-left">
                <div>
                  <img src={fitness} alt="" />
                </div>
                <h4>free fitness training</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  enim pariatur veniam. Ea magnam consequuntur quod quaerat
                  assumenda velit quas.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flipInY"
              animateOut="flipOutY"
              className="col-12 col-sm-12 col-md-4"
            >
              <div className="testimonial-card-middle">
                <div>
                  <img src={cardio} alt="" />
                </div>
                <h4>tons of cardio and strength</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  enim pariatur veniam. Ea magnam consequuntur quod quaerat
                  assumenda velit quas.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="bounceInLeft"
              className="col-12 col-sm-12 col-md-4"
            >
              <div className="testimonial-card-right">
                <div>
                  <img src={membership} alt="" />
                </div>
                <h4>no commitment membership</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  enim pariatur veniam. Ea magnam consequuntur quod quaerat
                  assumenda velit quas.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </SkeletonComponent>
      </section>
    </>
  );
};

export default Testimonial;

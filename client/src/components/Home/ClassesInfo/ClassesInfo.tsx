import React from "react";
import "./ClassesInfo.scss";
import classImgOne from "../../../images/classImgOne.png";
import classImgTwo from "../../../images/classImgTwo.jpg";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ClassesInfo: React.FC = () => {
    return (
        <section className="container">
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
                <h1 className="text-center">training programs</h1>
            </ScrollAnimation>
            <div className="split trainings">
                <div>
                    <img
                        src="https://i.ibb.co/kgpNywn/class-Img-One.png"
                        alt=""
                    />
                    <div>
                        <Link to="/programs">
                            <h5>yoga training session</h5>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src="https://i.ibb.co/4W4FmQg/class-Img-Two.jpg"
                        alt=""
                    />
                    <div>
                        <Link to="/programs">
                            <h5>cardio training session</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesInfo;

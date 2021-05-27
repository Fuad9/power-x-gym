import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
//images
import gym from "../../images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";
import HeaderMain from "../HeaderMain/HeaderMain";
//styles
import "./ProgramsDetails.scss";

const ProgramsDetails: React.FC = () => {
    return (
        <>
            <HeaderMain>
                <ReactTyped
                    style={{ fontSize: "2.5rem", color: "orange" }}
                    strings={["SCHEDULE"]}
                    typeSpeed={120}
                />
            </HeaderMain>
            <section className="container">
                <div className="split">
                    <div className="details">
                        <img
                            src="https://i.ibb.co/3pp2ddt/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti facere officia impedit iusto
                            reprehenderit nisi maiores beatae consequatur
                            delectus dolores. At recusandae placeat non impedit
                            dolorum, consequatur dignissimos laboriosam eaque
                            ipsa ex autem odio, rem perspiciatis omnis in
                            possimus tenetur suscipit nisi porro a quis! Numquam
                            debitis totam modi illo.
                        </p>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            having slimmer shapely thighs
                        </h6>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            getting stronger body
                        </h6>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            increased metabolism
                        </h6>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            increased muscular endurance
                        </h6>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            maximum result in less time
                        </h6>
                        <h6>
                            <span role="img" aria-label="check-mark">
                                ✔️
                            </span>
                            firm hips and tummy
                        </h6>
                    </div>

                    <div className="class-schedule">
                        <h1 className="text-capitalize">
                            <span style={{ color: "orange" }}>class</span>{" "}
                            schedule
                        </h1>
                        <div className="row">
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>monday</h3>
                                    <h4>8am - 9am</h4>
                                </div>
                            </div>
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>tuesday</h3>
                                    <h4>10am - 11am</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>wednesday</h3>
                                    <h4>7am - 8am</h4>
                                </div>
                            </div>
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>thursday</h3>
                                    <h4>5pm - 6pm</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>friday</h3>
                                    <h4>6am - 7am</h4>
                                </div>
                            </div>
                            <div className="menu__container col-12 col-sm-12 col-md-5">
                                <div className="menu">
                                    <h3>saturday</h3>
                                    <h4>7pm - 8pm</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/purchase">
                    <button>join us</button>
                </Link>
            </section>
        </>
    );
};

export default ProgramsDetails;

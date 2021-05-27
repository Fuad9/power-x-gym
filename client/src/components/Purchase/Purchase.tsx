import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import HeaderMain from "../HeaderMain/HeaderMain";
import CountUp from "react-countup";
//styles
import "./Purchase.scss";

const Purchase: React.FC = () => {
   return (
      <>
         <HeaderMain>
            <ReactTyped
               style={{ fontSize: "2.5rem", color: "orange" }}
               strings={["PRICING PLANS"]}
               typeSpeed={120}
            />
         </HeaderMain>
         <section className="container">
            <h1 className="text-capitalize">
               <span style={{ color: "orange" }}>choose the offer</span> that
               suits you
            </h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
               quod ratione itaque quam cumque tempore
            </p>
            <div className="split purchase-plans">
               <div className="card-one">
                  <h4>basic</h4>
                  <h3>kickstart innermost bundle</h3>
                  <CountUp
                     start={0}
                     end={90}
                     delay={0}
                     duration={9.35}
                     decimals={0}
                  >
                     {({ countUpRef }) => (
                        <h1>
                           $
                           <span ref={countUpRef} />
                        </h1>
                     )}
                  </CountUp>
                  <h5>Kickstart your fitness journey with:</h5>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     5*40 minute personal traning sessions
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     An introductory set of innermost supplements(1*Protein,
                     1*Capsules & 1*Booster)
                  </h6>

                  <Link to="/registration">
                     <button>purchase</button>
                  </Link>
               </div>
               <div className="card-two">
                  <h4>standard</h4>
                  <h3>sports performance 360 innermost bundle</h3>
                  <CountUp
                     start={0}
                     end={120}
                     delay={0}
                     duration={9.35}
                     decimals={0}
                  >
                     {({ countUpRef }) => (
                        <h1>
                           $
                           <span ref={countUpRef} />
                        </h1>
                     )}
                  </CountUp>
                  <h5>Surpass your fitness goal with:</h5>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     5*40 minute personal traning sessions
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     An introductory set of innermost supplements(1*Protein,
                     1*Capsules & 1*Booster)
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     FMS(Functional Movement Screening)
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     Fit 3D body scan
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     Bodytrax assessment
                  </h6>

                  <Link to="/registration">
                     <button>purchase</button>
                  </Link>
               </div>
               <div className="card-three">
                  <h4>Premium</h4>
                  <h3>sports performance 360 myzone bundle</h3>
                  <CountUp
                     start={0}
                     end={140}
                     delay={0}
                     duration={9.35}
                     decimals={0}
                  >
                     {({ countUpRef }) => (
                        <h1>
                           $
                           <span ref={countUpRef} />
                        </h1>
                     )}
                  </CountUp>
                  <h5>Surpass your fitness goal with:</h5>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     5*40 minute personal traning sessions
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     An MZ-3 belt with ANT + technology
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     FMS(Functional Movement Screening)
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     Fit 3D body scan
                  </h6>
                  <h6>
                     <span role="img" aria-label="check-mark">
                        ✔️
                     </span>
                     Bodytrax assessment
                  </h6>

                  <Link to="/registration">
                     <button>purchase</button>
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
};

export default Purchase;

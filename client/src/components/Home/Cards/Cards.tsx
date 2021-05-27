import React from "react";
import "./Cards.scss";
import cardOneLogo from "../../../images/cardOneLogo.png";
import cardTwoLogo from "../../../images/cardTwoLogo.png";
import cardThreeLogo from "../../../images/cardThreeLogo.png";

const Cards: React.FC = () => {
   return (
      <section className="container">
         <div className="split">
            <div className="cardOne">
               <img src={cardOneLogo} alt="" />
               <h4>Progression</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor eius praesentium, earum commodi numquam sapiente!
               </p>
            </div>

            <div className="cardTwo">
               <img src={cardTwoLogo} alt="" />
               <h4 className="pt-4 text-warning">Workout</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ut alias, dolorum voluptatibus praesentium cum.
               </p>
            </div>

            <div className="cardThree">
               <img src={cardThreeLogo} alt="" />
               <h4>Nutrition</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  blanditiis excepturi aliquam! Cumque, impedit
               </p>
            </div>
         </div>
      </section>
   );
};

export default Cards;

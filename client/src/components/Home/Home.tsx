import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";
import ClassesInfo from "./ClassesInfo/ClassesInfo";
import Intro from "./Intro/Intro";
import Testimonial from "./Testimonial/Testimonial";

const Home: React.FC = () => {
   return (
      <>
         <Intro />
         <Cards />
         <About />
         <ClassesInfo />
         <Testimonial />
      </>
   );
};

export default Home;

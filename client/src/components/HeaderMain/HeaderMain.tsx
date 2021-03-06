import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import "./HeaderMain.scss";

interface Props {
  children: any;
}

const HeaderMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="container">
        <div className="header">
          <NavBar />
          <div className="children">{children}</div>
        </div>
      </section>
    </>
  );
};

export default HeaderMain;

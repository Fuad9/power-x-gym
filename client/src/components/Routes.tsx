import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import About from "./Home/About/About";
import ClassesInfo from "./Home/ClassesInfo/ClassesInfo";
import Home from "./Home/Home";
import Testimonial from "./Home/Testimonial/Testimonial";
import Payment from "./Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import Programs from "./Programs/Programs";
import ProgramsDetails from "./ProgramsDetails/ProgramsDetails";
import Purchase from "./Purchase/Purchase";
import Registration from "./Registration/Registration";
import Footer from "./Shared/Footer/Footer";
import UserProfile from "./UserProfile/UserProfile";

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/classes" component={ClassesInfo} />
          <Route path="/services" component={Testimonial} />
          <Route path="/programs" component={Programs} />
          <Route path="/programDetails" component={ProgramsDetails} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/registration">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <UserProfile />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;

import React from "react";
import "./index.scss";
import Col from "react-bootstrap/Col";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import TestimonialContainer from "./containers/TestimonialContainer";
import CalculatorContainer from "./containers/CalculatorContainer";

const App = () => {
  return (
    <Col xs={12} className={"main"}>
      <Navigation />
      <Redirect from={"/"} to={"/page-1"} />
      <Route exact path="/page-1" component={TestimonialContainer} />
      <Route exact path="/page-2" component={CalculatorContainer} />
    </Col>
  );
};

export default App;

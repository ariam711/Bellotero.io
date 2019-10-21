import React from "react";
import { connect } from "react-redux";
import Testimonial from "../components/Testimonial";

const Container = () => <Testimonial />;
const TestimonialContainer = connect()(Container);

export default TestimonialContainer;

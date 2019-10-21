import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  loadTestimonial,
  nextCard,
  prevCard
} from "../actions/TestimonialAction";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/all";
import { useSelector, useStore } from "react-redux";
import { ReviewType } from "../types/ReviewType";

export default () => {
  const store = useStore();
  const { title, reviews, current } = useSelector((state: any) => state);
  const [review, setReview] = useState<ReviewType>({
    name: "",
    position: "",
    comment: ""
  } as ReviewType);

  useEffect(() => {
    store.dispatch(loadTestimonial());
  }, [store]);

  useEffect(() => {
    current && setReview(reviews[current - 1] || review);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <Container className="vertical">
      <h1 className="title">{title}</h1>
      <Col
        style={{ position: "relative", width: "100%", height: "max-content" }}
      >
        <Card className="border-0">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {review.position}
                </Card.Subtitle>
              </Col>
              <Col className="col-8">
                <Card.Text className="h3">"{review.comment}"</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row className="card-footer">
          <div className="nav-text h4">
            {current}/{reviews.length}
          </div>
          <IconContext.Provider value={{ color: "#d8d8d8" }}>
            <div className="nav-btn" onClick={() => store.dispatch(prevCard())}>
              <FaArrowLeft />
            </div>
            <div className="nav-btn" onClick={() => store.dispatch(nextCard())}>
              <FaArrowRight />
            </div>
          </IconContext.Provider>
        </Row>
      </Col>
    </Container>
  );
};

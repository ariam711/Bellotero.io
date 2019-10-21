import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";
import {
  loadCalculator,
  makeCalc,
  setFullTimeEmployee,
  setMonthlyIngredientSpending
} from "../actions/CalculatorAction";
import { useSelector, useStore } from "react-redux";
import { CalculatorType } from "../types/CalculatorType";

export default () => {
  const store = useStore();
  const {
    title,
    description,
    monthlyIngredientSpending,
    fullTimeEmployee,
    estimatedFoodCostSaving,
    yourEstimatedAnnualSavings
  } = useSelector((state: any) => state as CalculatorType);

  useEffect(() => {
    store.dispatch(loadCalculator());
  }, [store]);

  useEffect(() => {
    store.dispatch(makeCalc());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyIngredientSpending, fullTimeEmployee]);

  return (
    <Container className="vertical">
      <Row className="calculator">
        <Col>
          <h1 className="title">{title}</h1>
          <p className="h5 content">{description}</p>
        </Col>
        <Col>
          <Row>
            <Col className="h5 label">
              Monthly
              <br />
              ingredient spending
            </Col>
            <Col className="to-calc-container">
              <div className="to-calc">
                <span>$</span>
                <input
                  value={monthlyIngredientSpending}
                  type="number"
                  min={10}
                  max={100}
                  step={0.01}
                  maxLength={5}
                  onChange={e => {
                    const val = parseFloat(
                      parseFloat(e.target.value).toFixed(2)
                    );
                    console.log(`Val: ${JSON.stringify(val)}`);
                    store.dispatch(
                      setMonthlyIngredientSpending(
                        val < 10 ? 10 : val > 100 ? 100 : val
                      )
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="slider-container">
            <Slider
              min={10}
              max={100}
              step={0.01}
              value={monthlyIngredientSpending}
              onChange={value =>
                store.dispatch(setMonthlyIngredientSpending(value))
              }
            />
          </Row>
          <Row>
            <Col className="h5 label">
              Full-time employees that
              <br />
              process invoices
            </Col>
            <Col className="to-calc-container">
              <div className="to-calc">
                <span />
                <input
                  value={fullTimeEmployee}
                  type="number"
                  min={1}
                  max={10}
                  step={1}
                  maxLength={5}
                  onChange={e => {
                    const val = parseInt(e.target.value, 10);
                    store.dispatch(
                      setFullTimeEmployee(val < 1 ? 1 : val > 10 ? 10 : val)
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="slider-container">
            <Slider
              min={1}
              max={10}
              step={1}
              value={fullTimeEmployee}
              onChange={value => store.dispatch(setFullTimeEmployee(value))}
            />
          </Row>
          <Row>
            <Col className="center">
              <div>
                <span>$</span> <span>{estimatedFoodCostSaving}</span>
              </div>
              <span className="h5 label">Estimated cost food savings</span>
            </Col>
            <Col className="center">
              <div>
                <span>$</span> <span>{yourEstimatedAnnualSavings}</span>
              </div>
              <span className="h5 label">Your estimated annual saving</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

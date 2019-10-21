import React from "react";
import { connect, Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import Calculator from "../components/Calculator";
import calculatorStore from "../reducers/CalculatorStore";
import { calculatorSaga } from "../sagas/CalculatorSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(calculatorStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(calculatorSaga);
const Container = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

const CalculatorContainer = connect()(Container);

export default CalculatorContainer;

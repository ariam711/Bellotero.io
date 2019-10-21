import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import testimonialStore from "./reducers/TestimonialStore";
import { testimonialSaga } from "./sagas/TestimonialSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(testimonialStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(testimonialSaga);
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

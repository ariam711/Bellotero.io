import { all, call, put, takeEvery } from "redux-saga/effects";
import { CalculatorActionsType } from "../types/CalculatorActionsType";

export function* fetchPage2() {
  try {
    const response = yield call(
      fetch,
      // "http://data-test.local/page2.json"
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json"
    );
    const data = yield response.json();
    yield put({
      type: CalculatorActionsType.RENDER_CALCULATOR,
      calculator: data.calculator
    });
  } catch (e) {
    console.log(`CalculatorExceptionOnLoadingData: `, e);
    yield put({
      type: CalculatorActionsType.RESET_CALCULATOR
    });
    yield put({
      type: CalculatorActionsType.MAKE_CALC
    });
  }
}

export function* loadCalculator() {
  yield takeEvery(CalculatorActionsType.LOAD_CALCULATOR, fetchPage2);
}

export function* calculatorSaga() {
  yield all([loadCalculator()]);
}

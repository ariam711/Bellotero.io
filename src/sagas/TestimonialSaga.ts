import { all, call, put, takeEvery } from "redux-saga/effects";
import { TestimonialActionsType } from "../types/TestimonialActionsType";

export function* fetchPage1() {
  try {
    const response = yield call(
      fetch,
      // "http://data-test.local/page1.json"
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
    );
    const data = yield response.json();
    yield put({
      type: TestimonialActionsType.RENDER_TESTIMONIAL,
      testimonial: data.slider
    });
  } catch (e) {
    console.log(`TestimonialExceptionOnLoadingData: `, e);
    yield put({
      type: TestimonialActionsType.RESET_TESTIMONIAL
    });
  }
}

export function* loadTestimonial() {
  yield takeEvery(TestimonialActionsType.LOAD_TESTIMONIAL, fetchPage1);
}

export function* testimonialSaga() {
  yield all([loadTestimonial()]);
}

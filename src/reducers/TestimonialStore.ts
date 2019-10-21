import { CardType } from "../types/CardType";
import { TestimonialActionsType } from "../types/TestimonialActionsType";

const initialState = {
  title: "Sorry no reviews now",
  reviews: [],
  current: 0
} as CardType;

export default function testimonialStore(state = initialState, action: any) {
  switch (action.type) {
    case TestimonialActionsType.RENDER_TESTIMONIAL: {
      return {
        ...state,
        ...action.testimonial,
        current: action.testimonial.reviews.length ? 1 : 0
      };
    }
    case TestimonialActionsType.RESET_TESTIMONIAL: {
      return {
        ...initialState
      };
    }
    case TestimonialActionsType.NEXT_CARD: {
      const { current, reviews } = state;
      return {
        ...state,
        current: current === reviews.length ? current : current + 1
      };
    }
    case TestimonialActionsType.PREV_CARD: {
      const { current } = state;
      return {
        ...state,
        current: current === 1 ? 1 : current === 0 ? 0 : current - 1
      };
    }
    default:
      return state;
  }
}

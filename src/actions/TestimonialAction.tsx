import { TestimonialActionsType } from "../types/TestimonialActionsType";

export function loadTestimonial() {
  return {
    type: TestimonialActionsType.LOAD_TESTIMONIAL
  };
}

export function nextCard() {
  return {
    type: TestimonialActionsType.NEXT_CARD
  };
}

export function prevCard() {
  return {
    type: TestimonialActionsType.PREV_CARD
  };
}

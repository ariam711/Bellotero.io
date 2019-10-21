import { ReviewType } from "./ReviewType";

export type CardType = {
  title: string;
  reviews: ReviewType[];
  current: number;
};

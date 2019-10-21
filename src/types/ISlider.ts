export interface ISliderComponent {
  min: number;
  max: number;
  value: number;
  step?: number;
}

export interface ISlider extends ISliderComponent {
  onChange?: (value: number) => void;
}

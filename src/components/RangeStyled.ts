import styled from "styled-components";
import { ISliderComponent } from "../types/ISlider";

const thumb = `
    box-sizing: border-box;
    border: 0.5em solid #071eb3;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 6px -1px #071eb3;
`;

const track = `
    box-sizing: border-box;
    border: none;
    width: 12.5em;
    height: 0.35em;
    background: #f0f2ff;
    border-radius: 2em;
`;

export const RangeStyled = styled.input`
  --range: ${({ max, min }: ISliderComponent) => max - min};
  --ratio: calc(
    (${({ value, min }: ISliderComponent) => value - min}) / var(--range)
  );
  --sx: calc(0.5 * 1.5em + var(--ratio) * (100% - 1.5em));
  padding: 0;
  width: 100%;
  margin: 1em 0;
  height: 1.5em;
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &:focus {
    outline: none;
  }
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-runnable-track {
    ${track}
  }

  .bellotero-slider &::-webkit-slider-runnable-track {
    background: linear-gradient(#071eb3, #071eb3) 0 / var(--sx) 100% no-repeat
      #f0f2ff;
  }

  &::-moz-range-track,
  &::-ms-track {
    ${track}
  }

  &::-moz-range-progress,
  &::-ms-fill-lower {
    height: 0.35em;
    background: #071eb3;
  }

  &::-webkit-slider-thumb {
    margin-top: -0.625em;
    ${thumb}
  }
  &::-moz-range-thumb {
    ${thumb}
  }
  &::-ms-thumb {
    margin-top: 0;
    ${thumb}
  }
  &::-ms-tooltip {
    display: none;
  }
`;

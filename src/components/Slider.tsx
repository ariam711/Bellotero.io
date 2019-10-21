import React from "react";
import { ISlider } from "../types/ISlider";
import { RangeStyled } from "./RangeStyled";

document.documentElement.classList.add("bellotero-slider");
export default ({ min, max, value, onChange, ...props }: ISlider) => {
  return (
    <RangeStyled
      {...{ min, max, value, ...props }}
      onChange={e => {
        onChange && onChange(parseFloat(e.target.value));
      }}
      type="range"
    />
  );
};

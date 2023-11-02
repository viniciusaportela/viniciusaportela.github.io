import React from "react";
import { TextWithIcon, TextWithIconProps } from "./TextWithIcon";
import { Translation } from "../../@types/translation";
import { Translatable } from "../Translatable/Translatable";

interface TranslatableTextWithIconProps extends TextWithIconProps {
  value: keyof Translation;
}

export const TranslatableTextWithIcon: React.FC<
  TranslatableTextWithIconProps
> = (props) => {
  const { value, ...restProps } = props;

  return (
    <TextWithIcon {...restProps}>
      <Translatable value={value} />
    </TextWithIcon>
  );
};

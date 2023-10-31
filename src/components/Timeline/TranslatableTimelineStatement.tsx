import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { Translation } from "../../@types/translation";

interface TranslatableTimelineStatementProps {
  value: keyof Translation;
}

export const TranslatableTimelineStatement: React.FC<
  TranslatableTimelineStatementProps
> = ({ value }) => {
  return (
    <li>
      <Translatable value={value} />;
    </li>
  );
};

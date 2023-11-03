import { Translatable } from "../Translatable/Translatable";
import React, { PropsWithChildren } from "react";

export const TimelineJobSkills: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <span className="mt-1 text-sm">
      <Translatable value="skills" component="b" />: {children}
    </span>
  );
};

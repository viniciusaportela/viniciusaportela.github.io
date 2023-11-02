import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { Star } from "@phosphor-icons/react";
import { Translatable } from "../Translatable/Translatable";
import React from "react";

export const CurriculumSoftSkills = () => {
  return (
    <section>
      <TextWithIcon icon={Star} size="lg" className="mb-3 mt-7">
        Soft Skills
      </TextWithIcon>
      <Translatable value={"soft-skills"} />
    </section>
  );
};

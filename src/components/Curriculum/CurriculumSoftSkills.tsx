import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { Star } from "@phosphor-icons/react";
import { Translatable } from "../Translatable/Translatable";
import React from "react";

export const CurriculumSoftSkills = () => {
  return (
    <section className="mt-7">
      <Translatable className="font-bold text-2xl" value="soft-skills-title" />
      <div className="mb-1"></div>
      <Translatable value={"soft-skills"} />
    </section>
  );
};

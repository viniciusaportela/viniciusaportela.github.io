import { BookOpen } from "@phosphor-icons/react";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumCourses = () => {
  return (
    <section className="mt-7">
      <Translatable className="text-2xl font-bold" value="courses" />
      <Translatable value="course-one" component="li" className="mt-1" />
      <Translatable value="course-two" component="li" />
      <Translatable value="course-three" component="li" />
      <Translatable value="course-four" component="li" />
      <Translatable value="course-five" component="li" />
    </section>
  );
};

import { BookOpen } from "@phosphor-icons/react";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumCourses = () => {
  return (
    <section>
      <TranslatableTextWithIcon
        icon={BookOpen}
        size="lg"
        className="mb-3 mt-7"
        value="courses"
      />
      <Translatable value="course-one" component="li" />
      <Translatable value="course-two" component="li" />
      <Translatable value="course-three" component="li" />
      <Translatable value="course-four" component="li" />
      <Translatable value="course-five" component="li" />
    </section>
  );
};

import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { GraduationCap } from "@phosphor-icons/react";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumEducation = () => {
  return (
    <section>
      <TranslatableTextWithIcon
        icon={GraduationCap}
        size="lg"
        className="mb-3 mt-7"
        value="education"
      />
      <Timeline>
        <TimelineItem>
          <span>
            <Translatable value="level" />:{" "}
            <Translatable value="education-two" component="strong" /> -
            Universidade Federal de Santa Catarina (
            <Translatable value="in-progress" />)
          </span>
        </TimelineItem>
        <TimelineItem>
          <span>
            <Translatable value="level" />:{" "}
            <Translatable value="education-one" component="strong" /> -
            Instituto Federal de Ciência e Tecnologia do Pará
          </span>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

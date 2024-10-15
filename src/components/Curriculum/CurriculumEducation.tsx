import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { GraduationCap } from "@phosphor-icons/react";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumEducation = () => {
  return (
    <section className="mt-7">
      <Translatable className="text-2xl font-bold" value="education" />
      <Timeline className="mt-3">
        <TimelineItem>
          <span>
            <Translatable value="level" />:{" "}
            <Translatable value="education-two" component="strong" /> - PUC
            Minas (
            <Translatable value="in-progress" />)
          </span>
        </TimelineItem>
        <TimelineItem>
          <span>
            <Translatable value="level" />:{" "}
            <Translatable value="education-one" component="strong" /> - IFPA
          </span>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

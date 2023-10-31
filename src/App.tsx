import React from "react";
import { TextWithIcon } from "./components/TextWithIcon/TextWithIcon";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Rocket,
  RocketLaunch,
  Star,
} from "@phosphor-icons/react";
import { Translatable } from "./components/Translatable/Translatable";
import { Timeline } from "./components/Timeline/Timeline";
import { CurriculumHeader } from "./components/Curriculum/CurriculumHeader";
import { TimelineItem } from "./components/Timeline/TimelineItem";
import { TimelineHeader } from "./components/Timeline/TimelineHeader";
import { Month } from "./@types/month";
import { TranslatableTimelineStatement } from "./components/Timeline/TranslatableTimelineStatement";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-900 h-[160px] absolute top-0 -z-10"></div>
      <Translatable
        className="font-parisienne text-gray-400 text-2xl my-8 mx-auto"
        value="curriculum"
      />
      <div className="bg-white rounded-lg w-4/5 max-w-[840px] shadow-lg">
        <CurriculumHeader />
        <div className="w-full h-[1px] bg-gray-100"></div>
        <div className="p-8">
          <TextWithIcon
            icon={Briefcase}
            translatable
            size="lg"
            className="mb-3"
          >
            professional-experience
          </TextWithIcon>
          <Timeline>
            <TimelineItem>
              <TimelineHeader
                name="Tem Saúde"
                startDate={new Date(2023, Month.AUGUST)}
              />
              <TranslatableTimelineStatement value="tem-statement-one" />
              <TranslatableTimelineStatement value="tem-statement-two" />
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader
                name="Regera"
                startDate={new Date(2023, Month.MARCH)}
              />
              <TranslatableTimelineStatement value="regera-statement-one" />
              <TranslatableTimelineStatement value="regera-statement-two" />
              <TranslatableTimelineStatement value="regera-statement-three" />
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader
                name="RankMyApp"
                startDate={new Date(2022, Month.FEBRUARY)}
              />
              <TranslatableTimelineStatement value="rankmyapp-statement-one" />
              <TranslatableTimelineStatement value="rankmyapp-statement-two" />
              <TranslatableTimelineStatement value="rankmyapp-statement-three" />
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader
                name="Adireto"
                startDate={new Date(2020, Month.OCTOBER)}
              />
              <TranslatableTimelineStatement value="adireto-statement-one" />
              <TranslatableTimelineStatement value="adireto-statement-two" />
              <TranslatableTimelineStatement value="adireto-statement-three" />
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader
                name="Freelancer"
                startDate={new Date(2020, Month.APRIL)}
              />
              <TranslatableTimelineStatement value="freelancer-statement-one" />
              <TranslatableTimelineStatement value="freelancer-statement-two" />
            </TimelineItem>
          </Timeline>
          <TextWithIcon
            icon={RocketLaunch}
            translatable
            size="lg"
            className="mb-3 mt-7"
          >
            projects
          </TextWithIcon>
          <h2 className="text-lg font-bold">Smortech</h2>
          <Translatable value="smortech-description" />
          <h2 className="text-lg font-bold mt-3">Super Massagens</h2>
          <Translatable value="super-massagens-description" />
          <TextWithIcon
            icon={Star}
            translatable
            size="lg"
            className="mb-3 mt-7"
          >
            knowledge
          </TextWithIcon>
          <div className="flex flex-row">
            <div className="flex-1">
              <h2 className="font-bold text-lg">Front</h2>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg">Back</h2>
            </div>
          </div>
          <TextWithIcon
            icon={Star}
            translatable
            size="lg"
            className="mb-3 mt-7"
          >
            Soft Skills
          </TextWithIcon>
          <Translatable value={"soft-skills"} />
          <TextWithIcon
            icon={BookOpen}
            translatable
            size="lg"
            className="mb-3 mt-7"
          >
            courses
          </TextWithIcon>
          <TextWithIcon
            icon={GraduationCap}
            translatable
            size="lg"
            className="mb-3 mt-7"
          >
            education
          </TextWithIcon>
        </div>
      </div>
    </div>
  );
}

export default App;

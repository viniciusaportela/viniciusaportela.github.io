import { TimelineItem } from "../Timeline/TimelineItem";
import { TimelineJobHeader } from "../Timeline/TimelineJobHeader";
import { Month } from "../../@types/month";
import { TranslatableTimelineStatement } from "../Timeline/TranslatableTimelineStatement";
import { Timeline } from "../Timeline/Timeline";
import React from "react";
import { Briefcase } from "@phosphor-icons/react";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";
import { TimelineJobSkills } from "../Timeline/TimelineJobSkills";

export const CurriculumJobs = () => {
  return (
    <section>
      <TranslatableTextWithIcon
        icon={Briefcase}
        size="lg"
        className="mb-3"
        value="professional-experience"
      />
      <Timeline>
        <TimelineItem>
          <TimelineJobHeader
            name="Tem Saúde"
            startDate={new Date(2023, Month.AUGUST)}
          />
          <Translatable value="tem-statement-one" component="li" />
          <Translatable value="tem-statement-two" component="li" />
          <TimelineJobSkills>
            React, React Native Web, Typescript, Tailwind, Styled Components,
            Jest
          </TimelineJobSkills>
        </TimelineItem>
        <TimelineItem>
          <TimelineJobHeader
            name="Regera"
            startDate={new Date(2023, Month.MARCH)}
          />
          <Translatable value="regera-statement-one" component="li" />
          <Translatable value="regera-statement-two" component="li" />
          <Translatable value="regera-statement-three" component="li" />
          <TimelineJobSkills>
            NestJS, AWS (Lambda, S3, CloudWatch, SQS, SNS), Typescript, Node.js,
            MongoDB
          </TimelineJobSkills>
        </TimelineItem>
        <TimelineItem>
          <TimelineJobHeader
            name="RankMyApp"
            startDate={new Date(2022, Month.FEBRUARY)}
          />
          <Translatable value="rankmyapp-statement-one" component="li" />
          <Translatable value="rankmyapp-statement-two" component="li" />
          <Translatable value="rankmyapp-statement-three" component="li" />
          <TimelineJobSkills>
            NestJS, Microservices, RabbitMQ, AntD, React, NodeJS, Python,
            Docker, MongoDB, MySQL, Redux
          </TimelineJobSkills>
        </TimelineItem>
        <TimelineItem>
          <TimelineJobHeader
            name="Adireto"
            startDate={new Date(2020, Month.OCTOBER)}
          />
          <Translatable value="adireto-statement-one" component="li" />
          <Translatable value="adireto-statement-two" component="li" />
          <Translatable value="adireto-statement-three" component="li" />
          <TimelineJobSkills>
            React, Nest.js, GraphQL, Microservices, Cloudflare Workers,
            Typescript, Node.js, Git, MaterialUI
          </TimelineJobSkills>
        </TimelineItem>
        <TimelineItem>
          <TimelineJobHeader
            name="Freelancer"
            startDate={new Date(2020, Month.APRIL)}
          />
          <Translatable value="freelancer-statement-one" component="li" />
          <Translatable value="freelancer-statement-two" component="li" />
          <TimelineJobSkills>
            Node.js, PostgreSQL, React, React Native, Next.js, Digital Ocean,
            Puppeeteer, Electron.js
          </TimelineJobSkills>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

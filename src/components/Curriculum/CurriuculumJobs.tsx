import { TimelineItem } from "../Timeline/TimelineItem";
import { TimelineJobHeader } from "../Timeline/TimelineJobHeader";
import { Month } from "../../@types/month";
import { Timeline } from "../Timeline/Timeline";
import React from "react";
import { Briefcase } from "@phosphor-icons/react";
import { Translatable } from "../Translatable/Translatable";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";
import { TimelineJobSkills } from "../Timeline/TimelineJobSkills";
import { jobs } from "../../constants/jobs";

export const CurriculumJobs = () => {
  const calculateJobTime = () => {
    const months = jobs.reduce((sum, job) => {
      const startDate = job.from;
      const endDate = job.to ?? new Date();

      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.ceil(diffDays / 30);

      return sum + diffMonths;
    }, 0);

    return `${(months / 12).toFixed(1)} `;
  };

  return (
    <section>
      <TranslatableTextWithIcon
        icon={Briefcase}
        size="lg"
        className="mb-3"
        value="professional-experience"
      />
      <i className="flex -mt-4 mb-3 gap-1 ml-9">
        {"4 "}
        <Translatable value="experience-time" component="i" />
      </i>
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
            Puppeeteer, Electron.js, Firebase
          </TimelineJobSkills>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

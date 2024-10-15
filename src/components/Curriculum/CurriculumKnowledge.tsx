import { Star } from "@phosphor-icons/react";
import React from "react";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";
import { Translatable } from "../Translatable/Translatable";
import { List } from "../List/List";

export const CurriculumKnowledge = () => {
  return (
    <section className="mt-7">
      <Translatable className="text-2xl mb-2 font-bold" value="knowledge" />
      <div className="flex-1 mb-4 w-full">
        <h3 className="text-xl mb-2">Front</h3>
        <List
          items={[
            "React",
            "React Native",
            "React Native Web",
            "Tailwind",
            "Material UI",
            "Styled Components",
            "React Context",
            "Redux",
            "NextJS",
            "GraphQL",
            "Web3",
            "Zustand",
          ]}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl mb-2">Back</h3>
        <List
          items={[
            "NodeJS",
            "Express.js",
            "Typescript",
            "NestJS",
            "RabbitMQ",
            "MongoDB",
            "MySQL",
            "Redis",
            "PostgresSQL",
            "Cloudflare Workers",
            "Docker",
            "AWS Lambda",
            "Serverless framework",
          ]}
        />
      </div>
      <div className="hidden print:block h-12"></div>
      <div className="p-2 bg-gray-100 -mx-2 mt-4 rounded-md">
        <span>Others</span>: <b>Git, HTTP, Rest API, Unit Testing, Agile</b>
      </div>
    </section>
  );
};

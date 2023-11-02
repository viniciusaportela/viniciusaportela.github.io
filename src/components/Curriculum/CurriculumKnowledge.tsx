import { Star } from "@phosphor-icons/react";
import React from "react";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumKnowledge = () => {
  return (
    <section>
      <TranslatableTextWithIcon
        icon={Star}
        size="lg"
        className="mb-3 mt-7"
        value="knowledge"
      />
      <div className="flex flex-row">
        <div className="flex-1 mr-2">
          <h3 className="font-bold text-lg">Front</h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <li>React</li>
            <li>React Native</li>
            <li>React Native Web</li>
            <li>Tailwind</li>
            <li>Material UI</li>
            <li>Styled Components</li>
            <li>React Context</li>
            <li>Redux</li>
            <li>NextJS</li>
            <li>GraphQL</li>
            <li>Web3</li>
          </div>
        </div>
        <div className="flex-1 ml-2">
          <h3 className="font-bold text-lg">Back</h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>NestJS</li>
            <li>RabbitMQ</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Redis</li>
            <li>PostgresSQL</li>
            <li>Cloudflare Workers</li>
            <li>Docker</li>
            <li>AWS Lambda</li>
            <li>Serverless framework</li>
          </div>
        </div>
      </div>
    </section>
  );
};

import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { RocketLaunch } from "@phosphor-icons/react";
import { Translatable } from "../Translatable/Translatable";
import React from "react";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumProjects = () => {
  return (
    <section className="mt-7">
      <Translatable className="text-2xl font-bold" value="projects" />
      <article className="mt-1">
        <h2 className="text-lg font-bold">Smortech</h2>
        <Translatable value="smortech-description" />
      </article>
      <article>
        <h2 className="text-lg font-bold mt-3">Super Massagens</h2>
        <Translatable value="super-massagens-description" />
      </article>
    </section>
  );
};

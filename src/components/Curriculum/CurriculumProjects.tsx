import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import { RocketLaunch } from "@phosphor-icons/react";
import { Translatable } from "../Translatable/Translatable";
import React from "react";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumProjects = () => {
  return (
    <section>
      <TranslatableTextWithIcon
        icon={RocketLaunch}
        size="lg"
        className="mb-3 mt-7"
        value="projects"
      />
      <article>
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

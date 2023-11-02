import PhotoImg from "../../assets/images/photo.png";
import { Translatable } from "../Translatable/Translatable";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";
import React from "react";
import { TranslatableTextWithIcon } from "../TextWithIcon/TranslatableTextWithIcon";

export const CurriculumHeader = () => {
  return (
    <header className="p-8 grid grid-cols-[140px_1fr] grid-rows-[minmax(140px,_auto)_auto] md:grid-rows-[auto]">
      <img
        alt="photo"
        className="w-[140px] h-[140px] row-span-1 md:row-span-2"
        src={PhotoImg}
      />
      <div className="flex flex-1 flex-col ml-4">
        <span className="text-2xl font-bold">Vinícius de Araújo Portela</span>
        <span>Sênior FullStack Software Engineer</span>
        <Translatable className="text-sm" value="address" />
      </div>
      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 pt-3 col-span-2 md:col-span-1 ml-0 md:ml-4">
        <div>
          <TextWithIcon
            icon={GithubLogo}
            link="https://github.com/viniciusaportela"
          >
            https://github.com/viniciusaportela
          </TextWithIcon>
        </div>
        <div>
          <TextWithIcon
            icon={LinkedinLogo}
            link="https://www.linkedin.com/in/vinicius-portela/"
          >
            https://www.linkedin.com/in/vinicius-portela/
          </TextWithIcon>
        </div>
        <div>
          <TextWithIcon icon={EnvelopeSimple}>
            vinicius.portela.stm@gmail.com
          </TextWithIcon>
        </div>
        <div>
          <TranslatableTextWithIcon icon={Phone} value="phone" />
        </div>
      </div>
    </header>
  );
};

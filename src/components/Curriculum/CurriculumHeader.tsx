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

export const CurriculumHeader = () => {
  return (
    <div className="flex p-8">
      <img alt="photo" className="w-[140px] h-[140px]" src={PhotoImg} />
      <div className="flex flex-1 flex-col ml-4">
        <span className="text-2xl font-bold">Vinícius de Araújo Portela</span>
        <span>Sênior FullStack Software Engineer</span>
        <Translatable className="text-sm" value="address" />
        <div className="mt-auto flex flex-wrap gap-1 justify-between">
          <div className="flex flex-1">
            <TextWithIcon icon={GithubLogo}>
              https://github.com/viniciusaportela
            </TextWithIcon>
          </div>
          <div className="flex flex-1">
            <TextWithIcon icon={LinkedinLogo}>
              https://www.linkedin.com/in/vinicius-portela/
            </TextWithIcon>
          </div>
          <div className="flex flex-1">
            <TextWithIcon icon={EnvelopeSimple}>
              vinicius.portela.stm@gmail.com
            </TextWithIcon>
          </div>
          <div className="flex flex-1">
            <TextWithIcon icon={Phone} translatable>
              phone
            </TextWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {TextWithIcon} from "./components/TextWithIcon";
import PhotoImg from "./assets/images/photo.png";
import {Briefcase, EnvelopeSimple, GithubLogo, LinkedinLogo, Phone} from "@phosphor-icons/react";
import {Translatable} from "./components/Translatable";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-900 h-[160px] absolute top-0 -z-10"></div>
      <Translatable className="font-parisienne text-gray-400 text-2xl my-8 mx-auto">curriculum</Translatable>
      <div className="bg-white rounded-lg w-4/5 max-w-[840px] shadow-lg">
        <div className="flex p-8">
          <img alt="photo" className="w-[140px] h-[140px]" src={PhotoImg}/>
          <div className="flex flex-1 flex-col ml-4">
            <span className="text-2xl font-bold">Vinícius de Araújo Portela</span>
            <span>Sênior FullStack Software Engineer</span>
            <Translatable className="text-sm">Florianópolis - Santa Catarina</Translatable>
            <div className="mt-auto flex flex-wrap gap-1 justify-between">
              <div className="flex flex-1">
                <TextWithIcon icon={GithubLogo}>https://github.com/viniciusaportela</TextWithIcon>
              </div>
              <div className="flex flex-1">
                <TextWithIcon icon={LinkedinLogo}>https://www.linkedin.com/in/vinicius-portela/</TextWithIcon>
              </div>
              <div className="flex flex-1">
                <TextWithIcon icon={EnvelopeSimple}>vinicius.portela.stm@gmail.com</TextWithIcon>
              </div>
              <div className="flex flex-1">
                <TextWithIcon icon={Phone} translatable>phone</TextWithIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-100"></div>
        <div className="p-8">
          <TextWithIcon icon={Briefcase} translatable size="lg">professional-experience</TextWithIcon>
        </div>
      </div>
    </div>
  );
}

export default App;

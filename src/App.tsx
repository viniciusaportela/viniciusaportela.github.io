import React, { useLayoutEffect } from "react";
import { Translatable } from "./components/Translatable/Translatable";
import { CurriculumHeader } from "./components/Curriculum/CurriculumHeader";
import { CurriculumJobs } from "./components/Curriculum/CurriuculumJobs";
import { CurriculumProjects } from "./components/Curriculum/CurriculumProjects";
import { CurriculumKnowledge } from "./components/Curriculum/CurriculumKnowledge";
import { CurriculumSoftSkills } from "./components/Curriculum/CurriculumSoftSkills";
import { CurriculumCourses } from "./components/Curriculum/CurriculumCourses";
import { CurriculumEducation } from "./components/Curriculum/CurriculumEducation";
import { useQueryParam } from "./hooks/useQueryParam";
import { Language, useLanguage } from "./context/LanguageContext";
import { LanguageSwitch } from "./components/LanguageSwitch/LanguageSwitch";

function App() {
  const { setLanguage } = useLanguage();
  const [langParam] = useQueryParam("lang", "pt");

  useLayoutEffect(() => {
    if (langParam) {
      setLanguage(langParam as Language);
    }
  }, [langParam]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full bg-gray-900 h-[160px] absolute top-0 -z-10"></div>

      <div className="relative max-w-[880px] flex items-center w-[96%]">
        <LanguageSwitch className="absolute right-0 top-3" />
        <Translatable
          className="font-parisienne text-gray-400 text-2xl my-8 mx-auto"
          value="curriculum"
        />
      </div>

      <div className="bg-white rounded-lg w-[96%] max-w-[880px] shadow-lg mb-4 md:mb-12">
        <CurriculumHeader />
        <div className="w-full h-[1px] bg-gray-100"></div>
        <main className="p-8">
          <CurriculumJobs />
          <CurriculumProjects />
          <CurriculumKnowledge />
          <CurriculumCourses />
          <CurriculumEducation />
          <CurriculumSoftSkills />
        </main>
        <footer className="p-4 bg-gray-100">
          <Translatable value="footer" />{" "}
          <a
            href="https://github.com/viniciusaportela/viniciusaportela.github.io"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

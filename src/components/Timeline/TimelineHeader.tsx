import React from "react";
import { Translatable } from "../Translatable/Translatable";
import { useLanguage } from "../../context/LanguageContext";

interface TimelineHeaderProps {
  name: string;
  startDate: Date;
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({
  name,
  startDate,
}) => {
  const { language } = useLanguage();

  const getReadableStartDate = (date: Date) => {
    const month = new Intl.DateTimeFormat(language, {
      month: "short",
    }).format(date);
    const year = date.getFullYear();

    return `${month} ${year}`;
  };

  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg">{name}</span>
      <span className="text-sm -mt-1.5 mb-1.5">
        <Translatable value="start-date" className="text-sm" />:{" "}
        {getReadableStartDate(startDate)}
      </span>
    </div>
  );
};

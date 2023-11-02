import React from "react";
import enJson from "../../constants/language-en";
import ptJson from "../../constants/language-pt";
import { useLanguage } from "../../context/LanguageContext";
import { Translation } from "../../@types/translation";
import { HTMLTag } from "../../@types/html-tag";

interface TranslatableProps {
  value: keyof Translation;
  className?: string;
  component?: HTMLTag;
}

export const Translatable: React.FC<TranslatableProps> = ({
  value,
  className,
  component,
}) => {
  const { language } = useLanguage();

  const getTranslatedValue = (value: string) => {
    switch (language) {
      case "en":
        return enJson[value as keyof typeof enJson];
      case "pt":
        return ptJson[value as keyof typeof ptJson];
      default:
        return value;
    }
  };

  const getTranslation = (value: string) => {
    return getTranslatedValue(value) ?? value;
  };

  return React.createElement(
    component ?? "span",
    { className },
    getTranslation(value),
  );
};

import React from "react"
import enJson from "../constants/language-en";
import ptJson from "../constants/language-pt";
import {useLanguage} from "../context/LanguageContext";

interface TranslatableProps {
  children: string;
  className?: string;
}

export const Translatable: React.FC<TranslatableProps> = ({ children, className }) => {
  const { language } = useLanguage();

  const getTranslatedValue = (value: string) => {
    switch (language) {
      case "en":
        return enJson[value as keyof typeof enJson]
      case "pt":
        return ptJson[value as keyof typeof ptJson]
      default:
        return value;
    }
  }

  const getTranslation = (value: string) => {
    return getTranslatedValue(value) ?? value;
  }

  return <span className={className}>{getTranslation(children)}</span>
}
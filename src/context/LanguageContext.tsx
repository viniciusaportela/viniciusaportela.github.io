import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

enum Language {
  PT = "pt",
  EN = "en",
}

interface LanguageContextInterface {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextInterface | null>(
  null,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(Language.EN);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext)!;
};

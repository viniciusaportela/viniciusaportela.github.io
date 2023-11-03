import { Language, useLanguage } from "../../context/LanguageContext";
import EnSvg from "../../assets/images/en.svg";
import PtSvg from "../../assets/images/pt.svg";
import clsx from "clsx";

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  className,
}) => {
  const { language, setLanguage } = useLanguage();

  const switchLanguage = () => {
    setLanguage(language === Language.EN ? Language.PT : Language.EN);
  };

  return (
    <div
      className={clsx(
        "flex flex-row bg-gray-800 rounded-lg p-2 cursor-pointer hover:bg-gray-700 transition-colors print:hidden",
        className,
      )}
      onClick={switchLanguage}
    >
      {language === Language.EN && (
        <img src={EnSvg} alt="us-flag" className="w-[29px] h-[23px]" />
      )}
      {language === Language.PT && (
        <img src={PtSvg} alt="br-flag" className="w-[29px] h-[23px]" />
      )}
    </div>
  );
};

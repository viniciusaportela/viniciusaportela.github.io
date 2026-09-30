import { Language, useLanguage } from "../../context/LanguageContext";
import EnSvg from "../../assets/images/en.svg";
import PtSvg from "../../assets/images/pt.svg";
import EsSvg from "../../assets/images/es.svg";
import clsx from "clsx";

interface LanguageSwitchProps {
  className?: string;
}

const flags = [
  { language: Language.EN, src: EnSvg, alt: "us-flag", title: "English" },
  { language: Language.PT, src: PtSvg, alt: "br-flag", title: "Português" },
  { language: Language.ES, src: EsSvg, alt: "es-flag", title: "Español" },
];

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  className,
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={clsx(
        "flex flex-row gap-1 bg-gray-800 rounded-lg p-1.5 print:hidden",
        className,
      )}
    >
      {flags.map((flag) => (
        <button
          key={flag.language}
          type="button"
          title={flag.title}
          onClick={() => setLanguage(flag.language)}
          className={clsx(
            "transition-opacity",
            flag.language !== language && "opacity-40 hover:opacity-100",
          )}
        >
          <img
            src={flag.src}
            alt={flag.alt}
            className="w-[24px] h-[18px] sm:w-[29px] sm:h-[23px]"
          />
        </button>
      ))}
    </div>
  );
};

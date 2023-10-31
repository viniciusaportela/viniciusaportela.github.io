import { ComponentType } from "react";
import { Translatable } from "../Translatable/Translatable";
import { Translation } from "../../@types/translation";
import clsx from "clsx";

interface ProfileDataProps {
  icon: ComponentType<{ size?: string | number }>;
  children: string;
  translatable?: boolean;
  className?: string;
  size?: "sm" | "lg";
}

export const TextWithIcon: React.FC<ProfileDataProps> = ({
  icon,
  children,
  translatable,
  className,
  size = "sm",
}) => {
  const Icon = icon;

  const textClassname = clsx(
    "ml-2 whitespace-nowrap",
    size === "sm" && "text-sm",
    size === "lg" && "text-xl font-bold",
  );

  return (
    <div className={clsx(["flex items-center", className])}>
      <Icon size={size === "sm" ? 20 : 30} />
      {translatable ? (
        <Translatable
          className={textClassname}
          value={children as keyof Translation}
        />
      ) : (
        <span className={textClassname}>{children}</span>
      )}
    </div>
  );
};

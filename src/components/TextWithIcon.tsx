import {ComponentType} from "react";
import {Translatable} from "./Translatable";
import {Translation} from "../typings/general";
import clsx from "clsx";

interface ProfileDataProps {
  icon: ComponentType<{ size?: string | number }>;
  children: string;
  translatable?: boolean;
  size?: "sm" | "lg";
}

export const TextWithIcon: React.FC<ProfileDataProps> = ({ icon, children, translatable, size = "sm" }) => {
  const Icon = icon;

  const textClassname = clsx("ml-2 whitespace-nowrap", size === "sm" && "text-sm", size === "lg" && "text-xl font-bold")

  return <div className="flex items-center">
    <Icon size={size === "sm" ? 20 : 30} />
    {translatable ? <Translatable className={textClassname}>{children}</Translatable> : <span className={textClassname}>{children}</span>}
  </div>
}
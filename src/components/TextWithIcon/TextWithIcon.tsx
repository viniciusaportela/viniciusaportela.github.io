import React, { ComponentType, PropsWithChildren } from "react";
import clsx from "clsx";

export interface TextWithIconProps extends PropsWithChildren {
  icon: ComponentType<{ size?: string | number; className?: string }>;
  className?: string;
  size?: "sm" | "lg";
  link?: string;
}

export const TextWithIcon: React.FC<TextWithIconProps> = ({
  icon,
  children,
  className,
  link,
  size = "sm",
}) => {
  const Icon = icon;

  const textClassname = clsx(
    "ml-2",
    size === "sm" && "text-sm",
    size === "lg" && "text-xl font-bold",
  );

  return (
    <div className={clsx(["flex items-center", className])}>
      <Icon
        size={size === "sm" ? 20 : 30}
        className={clsx("shrink-0", {
          "w-[20px] h-[20px]": size === "sm",
          "w-[30px] h-[30px]": size === "lg",
        })}
      />
      {React.createElement(
        link ? "a" : "span",
        { className: textClassname, href: link },
        children,
      )}
    </div>
  );
};

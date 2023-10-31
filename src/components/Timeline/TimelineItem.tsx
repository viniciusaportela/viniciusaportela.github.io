import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface TimelineItemProps extends PropsWithChildren {
  extendBottom?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  extendBottom,
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-[26px] pt-1 flex flex-col items-center mr-3 relative">
        <div className="rounded-full h-[14px] w-[14px] bg-gray-900 mt-0.5"></div>
        <div
          className={clsx(
            "w-[4px] bg-gray-900 absolute bottom-0 top-5",
            extendBottom && "-bottom-2",
          )}
        ></div>
      </div>
      <div className={clsx("flex flex-1 flex-col", extendBottom && "pb-4")}>
        {children}
      </div>
    </div>
  );
};

TimelineItem.displayName = "TimelineItem";

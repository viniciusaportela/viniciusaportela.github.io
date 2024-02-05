import React, { PropsWithChildren } from "react";
import { isNodeOfType } from "../../isNodeOfType";

interface TimelineProps extends PropsWithChildren {
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children);
  const timelineItemsCount = childrenArray.filter((component) =>
    isNodeOfType(component, "TimelineItem"),
  ).length;

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (isNodeOfType(child, "TimelineItem")) {
          return React.cloneElement(child as React.ReactElement, {
            extendBottom:
              timelineItemsCount > 1 && index !== timelineItemsCount - 1,
          });
        }

        return child;
      })}
    </div>
  );
};

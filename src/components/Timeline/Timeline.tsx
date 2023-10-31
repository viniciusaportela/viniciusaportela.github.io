import React, { PropsWithChildren } from "react";
import { isNodeOfType } from "../../isNodeOfType";

export const Timeline: React.FC<PropsWithChildren> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const timelineItemsCount = childrenArray.filter((component) =>
    isNodeOfType(component, "TimelineItem"),
  ).length;

  return (
    <div>
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

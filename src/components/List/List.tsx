import React from "react";
import { ListDot } from "./ListDot";

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="w-full flex flex-wrap gap-x-4 gap-y-2">
      {items.map((item) => (
        <div key={item} className="flex items-center">
          <ListDot />
          <span className="ml-2 transform text-md -translate-y-[1px] font-bold">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

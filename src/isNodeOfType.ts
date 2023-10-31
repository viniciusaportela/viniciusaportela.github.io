import React, { JSXElementConstructor, ReactNode } from "react";

export function isNodeOfType(node: ReactNode, type: string) {
  if (React.isValidElement(node) && typeof node.type !== "string") {
    return (
      (node.type as JSXElementConstructor<any> & { displayName: string })
        ?.displayName === type
    );
  }

  return false;
}

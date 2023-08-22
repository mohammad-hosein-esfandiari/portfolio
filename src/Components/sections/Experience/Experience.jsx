import React from "react";
import { ExpItem } from "./ExpItem";

export const Experience = ({ experienceArray }) => {
  return (
    <div>
      {experienceArray.map((item) => (
        <ExpItem key={item.companyName} {...item} />
      ))}
    </div>
  );
};

import React from "react";
import { ExpItem } from "./ExpItem";

export const Experience = ({ experienceArray }) => {
  const arr = [...experienceArray].reverse();
  return (
    <div>
      {arr.map((item) => (
        <ExpItem key={item.companyName} {...item} />
      ))}
    </div>
  );
};

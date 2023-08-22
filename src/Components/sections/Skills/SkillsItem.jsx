import React from "react";

export const SkillsItem = ({index,icon,title}) => {
  return (
    <ul className={`flex items-center ${index !== 0 && "mt-[23px]"}`}>
      <li className="-center opacity-40 w-[20px] h-[20px]">
        <img
          className=" object-cover object-center"
          src={icon}
          alt={icon}
          border="0"
        />
      </li>
      <li className="ml-2 text-[13px] font-bold">{title}</li>
    </ul>
  );
};

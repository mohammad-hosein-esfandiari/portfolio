import React from "react";

export const Description = ({ description }) => {
  return (
    <div className=" mt-2 text-[14px] leading-[17px] px-2 text-gray-p">
      <ul className="list-disc pl-1">
        {description.map((text, index) => (
          <li key={index} className="mb-1 text-[14px] px-2 text-gray-p">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

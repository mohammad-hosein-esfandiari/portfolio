import React from "react";

export const Description = ({ description }) => {
  return (
    <div className=" mt-2">
      {description.map((text, index) => (
        <p key={index} className="mb-1 text-[14px] px-2 text-gray-p">
          {text}
        </p>
      ))}
    </div>
  );
};

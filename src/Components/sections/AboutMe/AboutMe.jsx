import React from "react";

export const AboutMe = ({ text }) => {
  const firstIndex = text.indexOf(",");
  const firstBoldName = text.substring(0, firstIndex);
  const textEtc = text.substring(firstIndex);

  return (
    <div onClick={() => console.log("sdcdsc")} className="px-2 text-[19px]">
      <span className=" font-bold">{firstBoldName}</span>

      {textEtc}
    </div>
  );
};

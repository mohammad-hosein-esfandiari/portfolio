import React from "react";

export const ExpItem = ({
  companyName,
  description,
  experience,
  projectLinks,
}) => {
  return (
    <div className="mt-2">
      <ul className=" underline-offset-2 flex justify-between items-center underline decoration-slice">
        <li className="text-[17px] font-bold">{companyName}</li>
        <li className=" underline decoration-red-p text-[12px] text-red-p">
          {experience.count} {experience.type}
        </li>
      </ul>
      <p className=" text-gray-p mt-2 text-[14px] leading-[17px]">
        {description?.text}
      </p>
      {description?.bolletList?.length && (
        <ul className="list-disc pl-3 text-gray-p ">
          {description.bolletList.map((item, index) => (
            <li key={index} className="mt-2 text-[14px] leading-[17px]">
              {item}
            </li>
          ))}
        </ul>
      )}
      {projectLinks?.length && (
        <div className=" flex mt-2 ">
          <div className="text-[14px] ">Project Links:</div>
          <div className=" flex flex-col pt-[2px]">
            {projectLinks.map((link) => (
              <a
                key={link}
                className="ml-2 text-[12px] underline decoration-[#928b8b] hover:text-red-p hover:decoration-red-p underline-offset-2  text-gray-p"
                href={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

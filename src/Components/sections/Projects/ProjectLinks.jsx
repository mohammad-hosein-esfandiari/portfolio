import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
export const ProjectLinks = ({ githubLink, hostLink }) => {
  return (
    <ul className="mt-4">
      <li className=" flex items-center ">
        <i className="text-[22px] opacity-40">
          <AiFillGithub />
        </i>
        <a href={githubLink} className=" ml-2 underline underline-offset-2 text-gray-p text-[14px] transition-all duration-300 decoration-gray-p hover:decoration-red-p hover:text-red-p">
          {githubLink}
        </a>
      </li>
      <li className=" mt-2 flex items-center ">
        <i className="text-[22px] opacity-40">
          <BiLink />
        </i>
        <a href={hostLink} className=" ml-2 underline underline-offset-2 text-gray-p text-[14px] transition-all duration-300 decoration-gray-p hover:decoration-red-p hover:text-red-p">
          {hostLink}
        </a>
      </li>
    </ul>
  );
};

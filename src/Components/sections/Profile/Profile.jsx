import img from "../../../assets/img.jpg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { ImSkype } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { useRoute } from "wouter";
import { useEffect } from "react";
import axios from "axios";
export const Profile = ({
  lastName,
  firstName,
  nickName,
  jobType,
  email,
  phoneNumber,
  linkedin,
  skype,
  city,
  province,
  experience,
  profileImage,
}) => {
  const [, params] = useRoute("/item/:id");



  return (
    <div className="h-[565px] flex-col flex ">
      <div>
        <div className="mt-3 overflow-hidden h-[235px] w-full">
          <img
          loading="lazy"
            className={`border-[2px] ${
              params?.id !== "profile" && "grayscale"
            } transition-all duration-1000 border-[#C0C0C0] object-cover object-center w-full h-full`}
            src={profileImage}
            alt=""
          />
        </div>
        <div className="text-[18px] mt-4 flex w-fit mx-auto items-center">
          <span className="font-bold">
            {firstName} {lastName}
          </span>
          <span className="ml-2 text-red-p">( {nickName} )</span>
        </div>
        <h2 className="mt-1 p-0 w-fit mx-auto uppercase font-bold text-[21px] text-[#858585]">
          {jobType}
        </h2>
        <div className="w-[80%] mt-3 border-[1px] mx-auto border-[#C0C0C0]"></div>
      </div>
      <div className=" flex-col flex justify-between  flex-1">
        <ul className="flex justify-around flex-col pl-2 mb-2 flex-1 w-fit mx-auto mt-2">
          <li className="flex  items-center ">
            <i className="text-[20px] opacity-40">
              <MdOutlineAlternateEmail />
            </i>
            <a href="" className="text-[15px] ml-6">
              {email}
            </a>
          </li>
          <li className="flex  items-center ">
            <i className="text-[20px] opacity-40">
              <FaPhoneAlt />
            </i>
            <span className="text-[15px] ml-6">{phoneNumber}</span>
          </li>
          <li className="flex  items-center ">
            <i className="text-[20px] opacity-40">
              <BiLogoLinkedin />
            </i>
            <span className="text-[15px] ml-6">
              {linkedin}
            </span>
          </li>
          <li className="flex items-center ">
            <i className="text-[20px] opacity-40">
              <ImSkype />
            </i>
            <span  className="text-[15px] ml-6">
              {skype}
            </span>
          </li>
          <li className="flex  items-center ">
            <i className="text-[20px] opacity-40">
              <HiHome />
            </i>
            <span  className="text-[15px] ml-6">
              <span>IRAN, </span>
              <span className=" opacity-40">{province}, </span>
              {city}
            </span>
          </li>
        </ul>
        <div className="">
          <div className="w-[80%] mt-1  border-[1px] mx-auto border-[#C0C0C0]"></div>

          <div className="py-1 mt-2 w-fit mx-auto">
            With <span className="text-red-p text-[20px] font-bold">+</span>
            <span className=" text-red-p text-[20px] font-bold">
              {experience}
            </span>{" "}
            years experience
          </div>
        </div>
      </div>
    </div>
  );
};

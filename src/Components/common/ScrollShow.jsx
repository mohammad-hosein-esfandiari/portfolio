import React from "react";
import { FaSortDown } from "react-icons/fa";
import { motion } from "framer-motion";
export const ScrollShow = () => {
  return (
    <motion.div
      exit={{ y: 10, opacity: 0 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-white text-[9px]   bg-[#00000051] fixed bottom-5 left-[46%] translate-x-[-50%] flex items-center justify-between w-fit px-1 py-[2px] ">
      <span className="px-1 animate-bounce  text-[12px]">
        <FaSortDown />
      </span>
    </motion.div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { ScrollShow } from "./ScrollShow";
import { AnimatePresence } from "framer-motion";

export const HtmlWrapper = ({ children, title, params }) => {
  const [showScroll, setShowScroll] = useState(false);
  const innerDiv = useRef(null);
  const outerDiv = useRef(null);
  const onScrollHandler = (event) => {
    if (params?.id == title) {
      const outerHeight =
        outerDiv.current.scrollHeight - outerDiv.current.clientHeight;
      const scrollHeight = outerDiv.current.scrollTop;
      if (innerDiv.current.offsetHeight > outerDiv.current.offsetHeight - 1) {
        if (Math.ceil(scrollHeight) >= outerHeight) {
          setShowScroll(false);
        } else {
          setShowScroll(true);
        }
      }
    } else {
      outerDiv.current.scrollTo(0,0)
      setShowScroll(false);
    }
  };
  useEffect(() => {
    onScrollHandler();
  }, [params]);
  const onScrollEndHandler = () => {};
  return (
    <div className=" h-full flex flex-col py-4 px-8">
      {title !== "profile" ? (
        <div>
          <h1 className=" italic capitalize font-bold text-[27px]">{title}</h1>
          <div className=" border-[1px] my-[16px] border-[#b5b5b5]"></div>
        </div>
      ) : null}
      <div
        onScrollCapture={onScrollEndHandler}
        onScroll={onScrollHandler}
        ref={outerDiv}
        className={` ${params?.id === title ? "overflow-y-scroll" : "overflow-y-hidden" }  overflow-x-hidden flex-1 `}>
        <div
          onClick={(e) => params?.id !== title && e.preventDefault()}
          ref={innerDiv}
          className="relative ">
          {children}
          <AnimatePresence>
            {showScroll ? <ScrollShow /> : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

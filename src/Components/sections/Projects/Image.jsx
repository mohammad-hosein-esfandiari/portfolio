import React, { useState } from 'react'
import { useRoute } from 'wouter';
import { FadeLoader } from "react-spinners";

export const Image = ({image}) => {
    const [, params] = useRoute("/item/:id");
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-[200px] w-full">
      {loading && (
            <div className="h-full  bg-[#a1a1a14d] w-full flex justify-center items-center">
              <FadeLoader color="#a1a1a1d5" />
            </div>
          ) }
    <img
      className={`${
        params?.id !== "projects" && "filterPic"
      }  transition-all object-cover object-center w-full -h-full duration-1000 `}
      alt="http://www.uplooder.net"
      src={image}
      onLoad={()=>setLoading(false)}
    />
  </div>
  )
}

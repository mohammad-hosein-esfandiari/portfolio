import React from 'react'
import { useRoute } from 'wouter';

export const Image = ({image}) => {
    const [, params] = useRoute("/item/:id");
  return (
    <div className="w-full">
    <img
      className={`${
        params?.id !== "projects" && "filterPic"
      }  transition-all duration-1000 `}
      alt="http://www.uplooder.net"
      src={image}
    />
  </div>
  )
}
